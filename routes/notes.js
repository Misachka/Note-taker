const notes = require('express').Router();
const uniqid = require('uniqid');
const { readAndAppend, readFromFile, readAndDelete } = require('../helpers/fsUtils');

//Get all notes from db.json file
notes.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

//Create notes with unique ID and are stored in db.json
notes.post('/', (req, res) => {
    console.log(req.body)
    const { title, text } = req.body;

    if (req.body) {
        const newNotes = {
            id: uniqid,
            title: title,
            text: text,
        };

        readAndAppend(newNotes, './db/db.json');
        res.json('New note has been created successfully!');

    } else {
        res.errored('Something went wrong...');
    }
});

//Delete notes
notes.delete('/api/notes/:id', (req, res) => {
  // reading notes form db.json
  let db = JSON.parse(fs.readFileSync('db/db.json'))
  // removing note with id
  let deleteNotes = db.filter(item => item.id !== req.params.id);
  // Rewriting note to db.json
  fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
  res.json(deleteNotes);
  
})


module.exports = notes;


