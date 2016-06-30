'use strict';
// const noteController = require(__dirname + '/controllers/note_controllers.js');

module.exports = function(app, noteController, model){

  app.get('/', (req, res)=>{
    console.log('model', model);
    noteController.getAllNotes()
    .then( note =>{
      console.log('note??', note);
      res.json(res);
    })
    .catch( err =>{
      console.error(err);

    });
  });

};
