'use strict';
var mongoose = require('mongoose'),
  config = require('../settings');


var port = (config.db.port.length > 0) ? ":" + config.db.port : '';
var login = (config.db.user.length > 0) ? config.db.user + ":" + config.db.pw + "@" : '';
var uristring =  "mongodb://" + login + config.db.host + port + "/" + config.db.name;

var mongoOptions = { db: { safe: true } };

// Connect to Database
mongoose.connect(uristring, mongoOptions, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log('Successfully connected to: ' + uristring);
  }
});


exports.mongoose = mongoose;