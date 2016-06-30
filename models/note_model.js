'use strict';
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: String,
  author: String,
  updated: {type: Date, default: Date.now },
  body: String,
  comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}]
});

let Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
