'use strict';
// const mongoose = require('mongoose');

module.exports = function(mongoose){
  let Schema = mongoose.Schema;
  let NoteSchema = new Schema({
    title: String,
    author: String,
    updated: {type: Date, default: Date.now },
    body: String,
    comments: [{type: Schema.ObjectId, ref: 'Comment'}]
  });

  let Note = mongoose.model('Note', NoteSchema);
  return Note;
};
