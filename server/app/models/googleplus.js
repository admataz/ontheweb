/**
 * Google's official npm module is a little verbose for our needs - going to use request
 */

var querystring = require('querystring');
var request = require('request');
var config = require('../settings');
var apiURL = 'https://www.googleapis.com/plus/v1/';

function getUserPosts(user_id, cb){
  request.get({
    'uri': apiURL+'people/+'+user_id+'/activities/public',
    'qs': {'key': config.google_api_key},
    'json': true
  }, function(err, response, body) {
    if (err) {
      cb(err);
      return;
    }



    cb(null, body);
  });
}

function getSearchResults( query, cb){
  request.get({
    'uri': apiURL+'activities',
    'qs': {'key': config.google_api_key, 'query':query, 'maxResults':20, 'orderBy':'recent'},
    'json': true
  }, function(err, response, body) {
    if (err) {
      cb(err);
      return;
    }

 

    cb(null, body);
  });
}



module.exports = {
  query: function(obj, cb) {
    if(['search', 'user'].indexOf(obj.channel) === -1){
      cb(new Error('No valid Google+ channel requested'));
    }

    if (obj.channel === 'user') {
      getUserPosts(obj.q, cb);
    }

    if (obj.channel === 'search') {
      getSearchResults(obj.q, cb);
    }


  }

};