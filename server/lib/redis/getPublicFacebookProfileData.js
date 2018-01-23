'use strict';

//Native Node Modules
const path = require('path');

//NPM Modules
const redis = require('redis');

//Local Modules
const publicFacebookUserProfileApi = require(path.join(__dirname, '..', 'externalRequests', 'publicFacebookUserProfileApi'));

//Module Export
module.exports = function(recipientId, callback) {
  if (recipientId !== process.env.FACEBOOK_PAGE_ID) {
    let redis = require('redis').createClient(process.env.REDIS_URL);
    let facebookData = null;
    redis.on('connect', function() {
      redis.get(recipientId.toString(), function (err, data) {
        if (data === null) {
          publicFacebookUserProfileApi(recipientId, function(userData) {
            if (userData !== null) {
              redis.set(recipientId.toString(), userData);
              redis.expire(recipientId.toString(), parseInt(process.env.REDIS_USER_DATA_EXPIRATION_TIME));
              facebookData = userData;
            }
            redis.quit();
          });
        } else {
          facebookData = data;
          redis.quit();
        }
      });
    });
    redis.on('end', function() {
      try {
        typeof facebookData !== 'object' ? JSON.parse(facebookData) : JSON.stringify(facebookData);
      } catch(e) {
        facebookData = null;
      }
      if (facebookData !== null && typeof facebookData !== 'object') facebookData = JSON.parse(facebookData);
      callback(facebookData);
    });
    redis.on('error', function (err) {
      console.log(`Redis encountered an error: ${err}.`);
    });
  } else {
    callback(null);
  }
};
