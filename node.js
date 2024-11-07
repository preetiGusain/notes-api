const express = require('express');
const connectDB = require('./db');
const Note = require('./models/Note');

const app = express();

connectDB();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the Notes API');
});

app.post('/save', async (req, res) => {
    try {
        //Creating new note with data from the request body
        const newNote = new Note({
            //id: ,
            title: req.body.title,
            content: req.body.content,
        });

        //Saving note to DB
        await newNote.save();

        //Retrieving notes from db
        const notes = await Note.find();

        res.status(201).json({
            message: 'Notes saved!',
            notes: notes,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error',
        });
    }
})

app.delete('/delete/:id', async (req, res) => {
    try {
        const noteID = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(noteID);

        if(!deletedNote) {
            return res.status(404).json({
                message: "Note not found",
            })
        }
        
        const remainingNotes = await Note.find();
        res.status(200).json({
            message: 'Note deleted successfully!',
            deletedNote: deletedNote,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error',
            error: error.message,
        });
    }
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server is running on ${port}`));