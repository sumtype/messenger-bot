'use strict';

//Native Node Modules
const path = require('path');

//Local Modules
const message = require(path.join(__dirname, 'types', 'message'));
const payload = require(path.join(__dirname, 'types', 'payload'));
const getPublicFacebookProfileData = require(path.join(__dirname, '..', 'redis', 'getPublicFacebookProfileData'));

//Module Export
module.exports = function(event) {
  getPublicFacebookProfileData(event.sender.id, function(facebookUserData) {
    if (event.message) return event.message.hasOwnProperty('quick_reply') ? payload(event, facebookUserData) : message(event, facebookUserData);
    if (event.postback) return payload(event, facebookUserData);
  });
};
