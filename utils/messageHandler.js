'use strict';

/**
* Message Handler Module
* @module messageHandler
*/

const jwt = require('jsonwebtoken');

/**
* Export object for messaging functions
* @type {Object}
* @desc allows use of messaging functions on the server.js page for socket.io
*/

module.exports = exports = {};

/**
* @method handshake
* @param {object} socket - socket coming from client side app
* @param {function} next - next function which calls next middleware
* on success
* @returns {function} next - which allows the user to proceed to the io.on connection and call the message function
* on failure
* @returns {string} errors out and returns'Authentication error'
* @desc Checks to see if a user has a valid token to establish a connection then proceeds to .on or returns an authentication error
*/

exports.handshake = (socket, next) => {
  // We could test for this after we solve the issue.
  // Breaks message server with invalid token. 
  // Should be easy to fix. Should maybe emit message back if invalid token
  if (socket.handshake.query && socket.handshake.query.token){
    let username = jwt.verify(socket.handshake.query.token, process.env.SECRET_KEY).username;
    socket.username = username;
    jwt.verify(socket.handshake.query.token, process.env.SECRET_KEY, function(err) {
      if(err) return next(new Error('Authentication error'));
      //    
      next();
    });
  } else {

    next(new Error('Authentication error'));
  }  
};

/**
* @method message
* @param {object} socket - socket coming from client side app that contains the decoded token
* @returns {object} returns an object containing the message payload that was sent with the username and date added
* @desc returns the message payload after verification passes from io.use with username and date attached
*/

exports.message = (socket) => {
  console.log(socket.username, 'has joined!');
  socket.on('message', payload => {
    payload = _addUsernameAndDate(payload, socket);
    socket.broadcast.emit('message', payload);
  });
};

/**
* @method _addUsernameAndDate
* @param {object} 
* @param {object} socket - socket coming from client side app that contains the decoded token
* @returns {object} returns an object containing the message payload that was sent with the username and date added
* @desc returns the message payload after verification passes from io.use with username and date attached
*/

function _addUsernameAndDate(payload, socket){
  payload = JSON.parse(payload);
  payload.username = socket.username;
  payload.timeSent = new Date();
  payload = JSON.stringify(payload);

  return payload;
}



