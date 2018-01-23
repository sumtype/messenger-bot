'use strict';

//Native Node Modules
const path = require('path');

//NPM Modules
const express = require('express');
const bodyParser = require('body-parser');
const client = require('redis').createClient(process.env.REDIS_URL);

//Local Modules
const addRoutes = require(path.join(__dirname, 'lib', 'routes', 'addRoutes'));

//Local Variables
let app = express();
app.use(bodyParser.json());
app = addRoutes(app);

//Server Startup
app.listen(process.env.PORT, () => console.log('Messenger bot server started.'));
