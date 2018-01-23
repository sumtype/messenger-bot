'use strict';

//NPM Modules
const path = require('path');

//Module Export
module.exports = function(app) {
  app.get('*', function(req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') return res.redirect(`https://${req.hostname}${req.url}`);
    next();
  });
  app.get('/', function(req, res) {
    return res.sendFile(path.join(__dirname, '..', '..', '..', 'app', 'index.html'));
  });
  app.get('/webhook', function(req, res) {
    if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === process.env.FACEBOOK_VERIFY_TOKEN) return res.status(200).send(req.query['hub.challenge']);
    res.sendStatus(403);
  });
  return app;
};
