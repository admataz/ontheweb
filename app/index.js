'use strict';

/*
  do some config management here

 */


require('./srv/db');
var app = require('./srv/http');
var route = require('./routes');
route(app);


// var WebItem = require('./models/WebItem');

