'use strict';

//Local Modules
const getRoutes = require('./getRoutes');
const postRoutes = require('./postRoutes');

//Module Export
module.exports = (app) => getRoutes(postRoutes(app));
