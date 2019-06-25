'use strict';

require('dotenv').config();

const io = require('socket.io')(process.env.PORT);
const jwt = require('jsonwebtoken');


io.use(function(socket, next){
  if (socket.handshake.query && socket.handshake.query.token){

    jwt.verify(socket.handshake.query.token, process.env.SECRET_KEY, function(err) {
      if(err) return next(new Error('Authentication error'));
      
      next();
    });
  } else {

    next(new Error('Authentication error'));
  }    
})
  .on('connection', function(socket) {

    socket.on('message', payload => {
      socket.broadcast.emit('message', payload);
    });
  });