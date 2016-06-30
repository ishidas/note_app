'use strict';
const Note = require('./../models/note_model.js');
const Promise = require('bluebird');
const debug = require('debug')('noteApp:note_controller');
let NoteMethods = {};


NoteMethods.getAllNotes = function (noteModel){
  // var Note = noteModel.model;

  debug('getAllNotes Controller');
  return new Promise((resolve, reject)=>{
    debug('getAllNotes Controller Promise');
    console.log('NOTE??', Note);
    Note.findOne({})
    .then(result => {
      console.log('result', result);
      resolve(result);
    })
    .catch( err => {
      console.log('Is this an error?', err);
      reject(err);
    })
    .catch(reject);
  });
};

module.exports = NoteMethods;
