'use strict';

//Native Node Modules
const path = require('path');

//Local Modules
const generic = require(path.join(__dirname, '..', 'responses', 'messages', 'generic'));
const list = require(path.join(__dirname, '..', 'responses', 'messages', 'list'));
const quickReply = require(path.join(__dirname, '..', 'responses', 'messages', 'quickReply'));
const text = require(path.join(__dirname, '..', 'responses', 'messages', 'text'));
const errorResponse = require(path.join(__dirname, '..', 'responses', 'errorResponse'));

//Module Export
module.exports = function(event, facebookUserData) {
  let { timestamp: messageTimestamp, message } = event;
  let recipientId = event.sender.id;
  let { mid: messageId, text: messageText, attachments: messageAttachments } = message;
  if (messageText) {
    if (!messageAttachments) {
      if ((/generic/gi).test(messageText)) {
        generic({ recipientId: recipientId });
      } else if ((/list/gi).test(messageText)) {
        list({ recipientId: recipientId });
      } else if ((/quick reply/gi).test(messageText)) {
        quickReply({ recipientId: recipientId });
      } else {
        facebookUserData !== null ? text({ recipientId: recipientId, message: `Message received from ${facebookUserData.first_name}: "${messageText}".` }) : text({ recipientId: recipientId, message: `Message received: "${messageText}".` });
      }
    } else {
      facebookUserData !== null ? text({ recipientId: recipientId, message: `Message with attachment received from ${facebookUserData.first_name} with text: "${messageText}".` }) : text({ recipientId: recipientId, message: `Message with attachment received with text: "${messageText}".` });
    }
  } else if (messageAttachments) {
    facebookUserData !== null ? text({ recipientId: recipientId, message: `Message with attachment received from ${facebookUserData.first_name}.` }) : text({ recipientId: recipientId, message: 'Message with attachment received.' });
  } else {
    facebookUserData !== null ? errorResponse({ recipientId: recipientId, facebookUserData: facebookUserData }) : errorResponse({ recipientId: recipientId });
  }
};
