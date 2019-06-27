'use strict';

module.exports = exports = {};

exports.addUsernameAndDate = (payload, socket) => {
  payload = JSON.parse(payload);
  payload.username = socket.username;
  payload.timeSent = new Date();
  payload = JSON.stringify(payload);

  return payload;
};
