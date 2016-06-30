'use strict';
const debug = require('debug')('noteApp:server');
const morgan = require('morgan');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');
const httpErrors = require('http-errors');
const Promise = require('bluebird');

const PORT = process.env.PORT || 3000;
const DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
Promise.promisifyAll(mongoose);
mongoose.connect(DB_PORT);

const noteModel = require(__dirname + '/models/note_model.js');
const noteController = require(__dirname + '/controllers/note_controllers');
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

require(__dirname + '/routes/note_routes.js')(app, noteController, noteModel);



let server = app.listen(PORT, ()=> debug('Server is running on 3000'));
server.isRunning = true;
module.exports = server;
