'use strict';
const dotenv = require('dotenv');
const assert = require('assert');
dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    SECRET_KEY,
    WEB_URL
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');


module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    secretKey: SECRET_KEY,
    webUrl : WEB_URL
}
