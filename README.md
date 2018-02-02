# Messenger Bot

[![Known Vulnerabilities](https://snyk.io/test/github/sumtype/messenger-bot/badge.svg)](https://snyk.io/test/github/sumtype/messenger-bot)

A simple Node.js messenger bot for deployment on Heroku.  The "app" directory contains the "index.html" page served at the Heroku deployment URL.  The server folder contains the server files used to manage messages coming from and going to users.  The messenger bot uses Redis for managing ephemeral user data during chats.  Commands for specified responses can be found below, the default response contains the message sent.  The bot can also respond to postback and quick reply payloads.

### Required Environment Variables

To enable this bot to communicate via messenger you'll need to make sure the following environment variables are declared on your Heroku app.

* `FACEBOOK_ACCESS_TOKEN`
* `FACEBOOK_APP_ID`
* `FACEBOOK_GRAPH_MESSAGES_API_URL`
* `FACEBOOK_GRAPH_USER_API_URL`
* `FACEBOOK_PAGE_ID`
* `FACEBOOK_VERIFY_TOKEN`
* `REDIS_URL`
* `REDIS_USER_DATA_EXPIRATION_TIME`

Please refer to the messenger platform documentation to learn how to acquire these for your bot.  The ones which are specific to this bot are covered below.

##### `REDIS_USER_DATA_EXPIRATION_TIME`

This environment variable corresponds to the expiration time, in seconds, before a user's data is deleted from the Redis database after it has been added.  This data is added when the user's data cannot be found in the application's Redis instance when the user messages the bot.

##### `FACEBOOK_GRAPH_MESSAGES_API_URL`

This environment variable corresponds to the Facebook messages API URL used by the bot to send messages.  For example, "https://graph.facebook.com/v2.8/me/messages".

##### `FACEBOOK_GRAPH_USER_API_URL`

This environment variable corresponds to the Facebook user data API URL used by the bot to collect basic user data when the user sends a message to the bot (and their data is not already in the Redis database).  For example, "https://graph.facebook.com/v2.8".

### Messenger Commands

These are keywords you can use to cause specific message response types from the bot.

##### `list`

Sends back a list message.

##### `generic`

Sends back a generic message.

##### `quick reply`

Sends back a quick reply message.
