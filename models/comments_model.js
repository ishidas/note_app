const mongoose = require('mongoose');

module.exports = function(){
  let Schema = mongoose.Schema;
  let CommentSchema = new Schema({
    title: String,
    author: String,
    updated: {type: Date, default: Date.now },
    body: String,
    notes: [{type: Schema.ObjectId, ref: 'Note'}]
  });

  let Comment = mongoose.model('Comment', CommentSchema);
  return Comment;
};
