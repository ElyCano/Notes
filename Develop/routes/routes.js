const { Router } = require("express");
const fs = require("fs");
const { resolve } = require("path");
const path = require("path");
const router = require("express").Router();
const notes = require("../db/Notes");
const { uuid } = require("uuidv4");

router.get("/notes", (req, res) => {
  notes.readNotes().then((result) => res.json(result));
});

router.post("/notes", (req, res) => {
  notes.readNotes().then((result) => {
    const { title, text } = req.body;

    const parseNote = result;

    console.log("Notes from json", parseNote);

    const newNote = {
      title,
      text,
      id: uuid(),
    };

    parseNote.push(newNote);

    notes.writeNotes(parseNote).then((result) => {
      console.log(res.json(result));
    });

    // console.log("add new note + oldnote", parseNote);
  });
});

module.exports = router;

// module.exports = (app) => {
//   // Setup notes variable
//   fs.readFile(
//     "../Develop/db/db.json",
//     "utf8",

//     (err, data) => {
//       if (err) throw err;

//       var notes = JSON.parse(data);

//       // API ROUTES
//       // ========================================================

//       // Setup the /api/notes get route
//       app.get("/api/notes", function (req, res) {
//         // Read the db.json file and return all saved notes as JSON.
//         res.json(notes);
//       });

//       // Setup the /api/notes post route
//       app.post("/api/notes", function (req, res) {
//         // Receives a new note, adds it to db.json, then returns the new note
//         let newNote = req.body;
//         notes.push(newNote);
//         updateDb();
//         return console.log("Added new note: " + newNote.title);
//       });

//       // Retrieves a note with specific id
//       app.get("/api/notes/:id", function (req, res) {
//         // display json for the notes array indices of the provided id
//         res.json(notes[req.params.id]);
//       });

//       // Deletes a note with specific id
//       app.delete("/api/notes/:id", function (req, res) {
//         notes.splice(req.params.id, 1);
//         updateDb();
//         console.log("Deleted note with id " + req.params.id);
//       });

//       // VIEW ROUTES
//       // ========================================================
//       // Display index.html when all other routes are accessed
//       app.get("*", function (req, res) {
//         res.sendFile(path.join(__dirname, "./public/index.html"));
//       });

//       // Display notes.html when /notes is accessed
//       app.get("/notes", function (req, res) {
//         res.sendFile(path.join(__dirname, "./public/notes.html"));
//       });

//       //updates the json file whenever a note is added or deleted
//       function updateDb() {
//         fs.writeFile("..db/db.json", JSON.stringify(notes), function (err) {
//           if (err) throw err;
//           return true;
//         });
//       }
//     }
//   );
// };
