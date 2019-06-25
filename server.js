'use strict';

require('dotenv').config();

const io = require('socket.io')(process.env.PORT);

io.on('connection', socket => {
  console.log(`Connected socket id: ${socket.id}`);
  socket.on('message', payload => {
    socket.broadcast.emit('message', payload);
  });
});
