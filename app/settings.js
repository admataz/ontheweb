'use strict'
var nconf = require('nconf');


 nconf.argv();

var config = {
  'db': {
    'name': 'OnTheWeb',
    'host': 'localhost',
    'user': '',
    'pw': '',
    'port': 27017
  },
  'http': {
    'name': 'OnTheWeb',
    'port': 8001
  }

};

nconf.defaults(config);

// console.log(nconf.get());

module.exports = nconf.get();
