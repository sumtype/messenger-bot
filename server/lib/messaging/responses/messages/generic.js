'use strict';

//Native Node Modules
const path = require('path');

//Local Modules
const facebookSendApi = require(path.join(__dirname, '..', '..', '..', 'externalRequests','facebookSendApi'));

//Module Export
module.exports = function({ recipientId = null, message = null, facebookUserData = null }) {
  if (recipientId !== process.env.FACEBOOK_PAGE_ID) {
    facebookSendApi({ recipient: { id: recipientId }, message:
      {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'generic',
            elements: [{
              title: 'A Generic Message',
              subtitle: `This is its subtitle.`,
              item_url: 'https://www.facebook.com/pg/Messenger-Bot-1825484077710961',
              image_url: 'https://scontent-ord1-1.xx.fbcdn.net/v/t31.0-8/16113166_1825515054374530_6249010219846179584_o.jpg?oh=6f128b9ec73d544e73686b86c09bf54a&oe=5906C866',
              buttons: [{
                type: 'web_url',
                url: 'https://www.facebook.com/pg/Messenger-Bot-1825484077710961',
                title: 'View a URL'
              }, {
                type: 'postback',
                title: 'Activity',
                payload: 'activity',
              }],
            }]
          }
        }
      }
    });
  }
};
