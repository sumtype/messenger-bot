'use strict';

//NPM Modules
const request = require('request');

//Module Export
module.exports = function (psid, cb) {
  request({ uri: `${process.env.FACEBOOK_GRAPH_USER_API_URL}/${psid}`, qs: { access_token: process.env.FACEBOOK_ACCESS_TOKEN }, method: 'GET' }, function (error, response, body) {
    if (!error && response.statusCode == 200) return cb(body);
    return cb(null);
  });
}
