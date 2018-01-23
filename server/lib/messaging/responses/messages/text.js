'use strict';

//Native Node Modules
const path = require('path');

//Local Modules
const facebookSendApi = require(path.join(__dirname, '..', '..', '..', 'externalRequests','facebookSendApi'));

//Module Export
module.exports = function({ recipientId = null, message = null, facebookUserData = null }) {
  if (recipientId !== process.env.FACEBOOK_PAGE_ID) facebookSendApi({ recipient: { id: recipientId }, message: { text: message } });
};
