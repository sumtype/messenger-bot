'use strict';

//Native Node Modules
const path = require('path');

//Local Modules
const facebookSendApi = require(path.join(__dirname, '..', '..', '..', 'externalRequests','facebookSendApi'));

//Module Export
module.exports = function({ recipientId = null, message = null, facebookUserData = null }) {
  if (recipientId !== process.env.FACEBOOK_PAGE_ID) {
    facebookSendApi({ 'recipient': { 'id': recipientId }, 'message': {
      'attachment': {
        'type': 'template',
        'payload': {
          'template_type': 'list',
          'elements': [{
            'title': 'Item One',
            'image_url': 'https://scontent-ord1-1.xx.fbcdn.net/v/t31.0-8/16251925_1825515764374459_6306168496830196614_o.jpg?oh=86423c9527668afe8d13c1bc3ad25b3a&oe=59056882',
            'subtitle': 'Subtitle for item one.',
            'default_action': {
              'type': 'web_url',
              'url': 'https://www.facebook.com/Messenger-Bot-1825484077710961/'
            },
            'buttons': [{
              'title': 'View a URL',
              'type': 'web_url',
              'url': 'https://www.facebook.com/Messenger-Bot-1825484077710961/'
            }]
          }, {
            'title': 'Item Two',
            'image_url': 'https://scontent-ord1-1.xx.fbcdn.net/v/t31.0-8/16179858_1825515394374496_3282156585613311186_o.jpg?oh=d754a5175cae15349344a5f766c38c9f&oe=5902DF6D',
            'subtitle': 'Subtitle for item two.',
            'default_action': {
              'type': 'web_url',
              'url': 'https://www.facebook.com/Messenger-Bot-1825484077710961/'
            }
          }],
          'buttons': [{
            'title': 'Activity',
            'type': 'postback',
            'payload': 'activity'
          }]
        }
      }
    } });
  }
};
