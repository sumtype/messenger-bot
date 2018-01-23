'use strict';

//Native Node Modules
const fs = require('fs');
const path = require('path');

//Local Modules
const activity = require(path.join(__dirname, '..', 'responses', 'payloads', 'activity'));
const errorResponse = require(path.join(__dirname, '..', 'responses', 'errorResponse'));

//Module Export
module.exports = function(event, facebookUserData = null) {
  let recipientId = event.sender.id;
  let payload = event.hasOwnProperty('message') ? event.message.quick_reply.payload : event.postback.payload;
  if (recipientId !== process.env.FACEBOOK_PAGE_ID) {
    if (payload === 'activity') return facebookUserData ? activity({ recipientId: recipientId, facebookUserData: facebookUserData }) : activity({ recipientId: recipientId });
    errorResponse({ recipientId: recipientId, facebookUserData: facebookUserData });
  }
};
