'use strict';

require('dotenv').config();
const Q = require('@nmq/q/server');

Q.start();

const messageQ = new Q('messageQ');
messageQ.monitorEvent('message');