'use strict';

//Native Node Modules
const path = require('path');

//Local Modules
const facebookSendApi = require(path.join(__dirname, '..', '..', 'externalRequests','facebookSendApi'));

//Module Export
module.exports = function({ recipientId = null, message = null, facebookUserData = null }) {
  if (recipientId === null) return console.log('Error, no recipient specified.');
  if (recipientId !== process.env.FACEBOOK_PAGE_ID) {
    let messageData = null;
    if (facebookUserData) {
      if (message) {
        messageData = {
          recipient: { id: recipientId },
          message: { text: `Sorry ${facebookUserData.first_name}, ${message}.` }
        };
      } else {
        messageData = {
          recipient: { id: recipientId },
          message: { text: `Sorry ${userData.first_name}, there was an error on our end.  Please try again or contact support.` }
        };
      }
    } else {
      if (message) {
        messageData = {
          recipient: { id: recipientId },
          message: { text: `${message}` }
        };
      } else {
        messageData = {
          recipient: { id: recipientId },
          message: { text: `Sorry, there was an error on our end.  Please try again or contact support.` }
        };
      }
    }
    facebookSendApi(messageData);
  }
};
