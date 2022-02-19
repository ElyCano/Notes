// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./Develop/routes/routes");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});
//Require routes file
app.use("/api", apiRoutes);

// Setup listener
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
