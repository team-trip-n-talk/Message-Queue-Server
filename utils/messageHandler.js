'use strict';

const jwt = require('jsonwebtoken');

module.exports = exports = {};

function addUsernameAndDate(payload, socket){
  payload = JSON.parse(payload);
  payload.username = socket.username;
  payload.timeSent = new Date();
  payload = JSON.stringify(payload);

  return payload;
}

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

exports.message = (socket) => {
  console.log(socket.username, 'has joined!');
  socket.on('message', payload => {
    payload = addUsernameAndDate(payload, socket);
    socket.broadcast.emit('message', payload);
  });
}