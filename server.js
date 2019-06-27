'use strict';

//Dependencies
require('dotenv').config();
const io = require('socket.io')(process.env.PORT);

// utils
const utils = require('./utils/messageHandler');

io.use(utils.handshake)
  .on('connection', utils.message);
