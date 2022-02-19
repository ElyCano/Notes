const fs = require("fs");
const { stringify } = require("querystring");

class Notes {
  readNotes = () => {
    return new Promise((resolve, reject) => {
      fs.readFile("Develop/db/db.json", "utf8", (err, data) => {
        if (err) {
          console.log("err ", err);
          resolve([]);
        }

        resolve(JSON.parse(data));
      });
    });
  };

  //TOD0 Create Write File
  writeNotes = (notesObj) => {
    return new Promise((resolve, reject) => {
      fs.writeFile("Develop/db/db.json", JSON.stringify(notesObj), (err) => {
        if (err) {
          resolve("can't add notes");
        }

        resolve("Add Notes success");
      });
    });
  };
}

module.exports = new Notes();
