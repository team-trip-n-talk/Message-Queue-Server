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
      let result = utils._addUsernameAndDate(payload, socket);
      result = JSON.parse(result);
      result.timeSent = 42;
      result = JSON.stringify(result);
      expect(result).toBe('{"message":"Hello World!","username":"Sam","timeSent":42}');
    });

    it('should return error if username is undefined', () => {
      //Future test
      expect(true).toBeTruthy();
    });
  });


  describe('handshake()', () => {
    it('should return error if secret key is missing', () => {
      //Future test
      expect(true).toBeTruthy();

    });

    it('should allow to emit if secret key is verified', () => {
      //Future test
      expect(true).toBeTruthy();
    });
  });

  describe('message', () => {
    it('should send message', () => {
      //Future test
      expect(true).toBeTruthy();
    });
  });
});