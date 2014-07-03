'use strict';
var mongoose = require('mongoose');
var config = require('../settings');


var port = (config.db_port.length > 0) ? ":" + config.db_port : '';
var login = (config.db_user.length > 0) ? config.db_user + ":" + config.db_pw + "@" : '';
var uristring =  "mongodb://" + login + config.db_host + port + "/" + config.db_name;

var mongoOptions = {
  // db: config.db_name,
  // server: config.db_host,
  user: config.db_user,
  pass: config.db_pw
};

// Connect to Database


module.exports = function(cb){
  mongoose.connect(uristring, mongoOptions, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err);
    return cb(err);
  } else {
    console.log('Successfully connected to: ' + uristring);
    cb();
  }
});
}