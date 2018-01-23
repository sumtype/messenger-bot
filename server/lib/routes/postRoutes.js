'use strict';

//NPM Modules
const path = require('path');

//Local Modules
const incoming = require(path.join(__dirname, '..', 'messaging', 'incoming'));

//Module Export
module.exports = function(app) {
  app.post('/webhook', function (req, res) {
    let data = req.body;
    if (data.object === 'page') {
      data.entry.forEach(function(entry) {
        entry.messaging.forEach(function(event) {
          incoming(event);
        });
      });
      res.sendStatus(200);
    }
  });
  return app;
};
