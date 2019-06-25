// 'use strict';

// require('dotenv').config();
// const Q = require('@nmq/q/server');

// Q.start();

// const messageQ = new Q('messageQ');
// messageQ.monitorEvent('message');

'use strict';

const io = require('socket.io')(process.env.PORT);

io.on('connection', socket => {
  console.log(`Connected socket id: ${socket.id}`);
  socket.on('message', payload => {
    socket.broadcast.emit('message', payload);
  });
});

// io.on('connection', socket => {
//   console.log(`Connected socket id: ${socket.id}`);
//   socket.on('file-error', payload => {
//     socket.broadcast.emit('file-error', payload);
//   });
// });