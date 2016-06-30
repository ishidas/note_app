'use strict';
const debug = require('debug')('noteApp:note_tests');
// const note_controller = require('/note_controllers.js');
const port = 3000;
const server = require(__dirname + '/../server');
const chai = require('chai');
const request = chai.request;
const expect = chai.expect;


describe('Testing REST routes', ()=>{
  before( done =>{
    if(!server.isRunning){
      server.listen(port, ()=>{
        debug('server up on 3000');
        server.isRunning = true;
        done();
      });
    }
    done();
    return;
  });//end of before - server open

  after( done => {
    if(server.isRunning){
      server.close(()=>{
        server.isRunning = false;
        debug('server is cloed');
        done();
      });
    }
    return;
  });//end of after - server close

  it('should be ture', (done)=>{
    expect(true).to.eql(true);
    done();
  });

});//end of test
