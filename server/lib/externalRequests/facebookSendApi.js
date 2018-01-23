'use strict';

//NPM Modules
const request = require('request');

//Module Export
module.exports = function (messageData) {
  request({ uri: process.env.FACEBOOK_GRAPH_MESSAGES_API_URL, qs: { access_token: process.env.FACEBOOK_ACCESS_TOKEN }, method: 'POST', json: messageData }, function (error, response, body) {
    if (!error && response.statusCode == 200) return console.log(`Message id ${body.message_id} to recipient ${body.recipient_id} sent.`);
    console.error(`Unable to send message.  Response: ${JSON.stringify(response)}.  Error message: ${JSON.stringify(error)}.`);
  });
}
