'use strict'
var nconf = require('nconf');

var config = {
    'db_name': 'OnTheWeb',
    'db_host': 'localhost',
    'db_user': '',
    'db_pw': '',
    'db_port': 27017,
    'http_name': 'OnTheWeb',
    'http_port': 8001,
    'socialmedia_platforms': ['facebook','twitter','googleplus','collected']
  };


// step down the hierarchy - use a local settings file but don't included it in the git repos
nconf.argv().env().file({ file: __dirname+'/settings.local.json' });



nconf.defaults(config);


module.exports = nconf.get();
