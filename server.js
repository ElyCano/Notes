// Dependencies
const express = require("express");

// Point Server to the route files
const apiRoutes = require("./Develop/routes/apiRoutes.js");
const htmlRoutes = require("./Develop/routes/htmlRoutes.js");

// Create an express server
const app = express();

// Set PORT
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Sets up the static files
app.use(express.static("public"));

// Parse incoming JSON data
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listener
app.listen(PORT, () => {
  console.log(`API server is ready on port ${PORT}!`);
});
