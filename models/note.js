const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
