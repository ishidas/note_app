'use strict';
const Note = require('./../models/note_model.js');
// const Promise = require('bluebird');
const debug = require('debug')('noteApp:note_controller');
let NoteMethods = {};


NoteMethods.getAllNotes = function (){
  debug('getAllNotes Controller');
  return new Promise((resolve, reject)=>{
    debug('getAllNotes Controller Promise');
    Note.find({})
    .then(result => {
      console.log('result', result);
      resolve(result);
    })
    .catch( err => {
      reject(err);
    })
    .catch(reject);
  });
};

module.exports = NoteMethods;
