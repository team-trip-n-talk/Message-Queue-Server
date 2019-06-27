'use strict';

/**
* Server Module
* @module server
*/

//Dependencies
require('dotenv').config();
const io = require('socket.io')(process.env.PORT);
const jwt = require('jsonwebtoken');
const express = require('express');

// Prepare the express app
const app = express();

//Jsdocs
app.use(express.static('docs'));
app.use('/docs', express.static('docs'));

/**
* @method io.use
* @param {function} function
* Function params
* @param {object} socket - socket coming from client side app
* @param {function} next - next function which calls next middleware
* io.use returns
* @returns {string} 'Authentication error'
* @desc Checks to see if a user has a valid token to establish a connection then proceeds or returns and authentication error
* @method io.on
* @param {function} function
* Function params
* @param {object} socket - socket coming from client side app
* @returns {object} returns an object containing the message payload that was sent
* @desc .on returns the message payload after verification passes from io.use
*/

io.use(function(socket, next){
  if (socket.handshake.query && socket.handshake.query.token){
    let username = jwt.verify(socket.handshake.query.token, process.env.SECRET_KEY).username;
    socket.username = username;
    // console.log('after being verify', username);
    jwt.verify(socket.handshake.query.token, process.env.SECRET_KEY, function(err) {
      if(err) return next(new Error('Authentication error'));
      
      next();
    });
  } else {

    next(new Error('Authentication error'));
  }    
})
  .on('connection', function(socket) {
    console.log(socket.username);
    socket.on('message', payload => {
      payload = JSON.parse(payload);
      payload.name = socket.username;
      payload.timeSent = new Date();
      payload = JSON.stringify(payload);
      socket.broadcast.emit('message', payload);
    });
  });