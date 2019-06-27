'use strict';

const utils = require('../utils/messageHandler');

describe('Utils module', () => {
  

  describe('addUserNameAndDate()', () => {
    let socket;
    let payload;

    beforeEach(() => {
      socket = {
        username: 'Sam',
      };
      payload = '{"message":"Hello World!"}';
    });

    it('should prep the message with username and a date', () => {
      let result = utils.addUsernameAndDate(payload, socket);
      result = JSON.parse(result);
      result.timeSent = 42;
      result = JSON.stringify(result);
      expect(result).toBe('{"message":"Hello World!","username":"Sam","timeSent":42}');
    });
  });
});