const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  title: String,
  author: String,
  updated: {type: Date, default: Date.now },
  body: String,
  notes: [{type: mongoose.Schema.ObjectId, ref: 'Note'}]
});

let Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
