const config = require('../config');
const stripeAPI = require('stripe')(config.secretKey);

module.exports = stripeAPI;