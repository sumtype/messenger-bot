'use strict';

//Native Node Modules
const path = require('path');

//Local Modules
const text = require(path.join(__dirname, '..', 'messages', 'text'));

//Module Export
module.exports = function({ recipientId = null, facebookUserData = null }) {
  facebookUserData !== null ? text({ recipientId: recipientId, message: `Activity response message for ${facebookUserData.first_name}.` }) : text({ recipientId: recipientId, message: 'Activity response message.' });
};
