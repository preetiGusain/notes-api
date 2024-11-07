//models/Note
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    id: {

    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Note', NoteSchema);