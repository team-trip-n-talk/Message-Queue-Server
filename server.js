'use strict';

// require('dotenv').config();
const Q = require('@nmq/q/server');

Q.start();

const api = new Q('api');
api.monitorEvent('msg');