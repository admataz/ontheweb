'use strict'
var nconf = require('nconf');

nconf.argv().env();

var config = {
    'db_name': 'OnTheWeb',
    'db_host': 'localhost',
    'db_user': '',
    'db_pw': '',
    'db_port': 27017,
    'http_name': 'OnTheWeb',
    'http_port': 8001
  };


nconf.defaults(config);


module.exports = nconf.get();
