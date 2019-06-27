'use strict';

/**
* Server Module
* @module server
*/

//Dependencies
require('dotenv').config();
const io = require('socket.io')(process.env.PORT);
// const jwt = require('jsonwebtoken');

// utils
const utils = require('./utils/messageHandler');

/**
* @method use
* @param {function} function
* @param {object} socket - socket coming from client side app
* @param {function} next - next function which calls next middleware
* @returns {string} 'Authentication error'
* @desc Checks to see if a user has a valid token to establish a connection then proceeds or returns and authentication error
*/

/**
* @method on
* @param {function} function
* @param {object} socket - socket coming from client side app
* @returns {object} returns an object containing the message payload that was sent
* @desc .on returns the message payload after verification passes from io.use
*/


io.use(utils.handshake)
  .on('connection', utils.message);
