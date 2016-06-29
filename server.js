'use strict';
const debug = require('debug')('noteApp:server'):
const morgan = require('morgan');
const express = require('express');
const app = express():
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db'
mongoose.connect(DB_PORT);

app.use(bodyParser.json());



let server = app.listen(PORT, ()=> debug('Server is running on 3000');)
server.isServerRunning = true;
module.exports = server;
