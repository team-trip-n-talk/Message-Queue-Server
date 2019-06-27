## Project Name
Trip 'n' Talk Message Queue Server

[![Build Status](https://www.travis-ci.com/team-trip-n-talk/Message-Queue-Server.svg?branch=master)](https://www.travis-ci.com/team-trip-n-talk/Message-Queue-Server)

### Authors: 
Tia Rose, Jeff Lawrence, Felipe Delatorre

### Links and Resources
* [Github](https://github.com/team-trip-n-talk/Message-Queue-Server)
* [Travis](https://www.travis-ci.com/team-trip-n-talk/Message-Queue-Server)
* [Heroku](https://trip-n-talk-message-server.herokuapp.com/)

#### Documentation
* [JSDOC](https://keen-saha-4ec8c1.netlify.com/module-messagehandler)
* [Data Flow Chart](https://www.lucidchart.com/documents/edit/b4adc909-52d2-460a-9a0a-d8cfb7211ec5/0)

### Module
* `server.js` - server that listens for incoming messages, authenticates them with attached tokens and broadcasts messages
* `messageHandler.js` - contains helper functions handshake, message, _addUserNameAndDate

### Setup

#### `.env` requirements - see env-sample or look below
* `PORT=`
* `SECRET_KEY=`

#### Running the app
* `npm start`
  
#### Tests
* `npm test`

### Group Agreement
* [Group Agreement](https://github.com/team-trip-n-talk/Message-Queue-Server/wiki/Group-Agreement)
