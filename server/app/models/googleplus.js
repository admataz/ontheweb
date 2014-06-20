/**
 * Google's official npm module is a little verbose for our needs - going to use request
 */

var querystring = require('querystring');
var request = require('request');
// var async = require('async');
var config = require('../settings');
var apiURL = 'https://www.googleapis.com/plus/v1/';

function normaliseResults(itm, i, cb) {
  var newObj = {};
  var photos = [];
  if(itm.url){
   newObj.url = itm.url;
  } else {
    if(itm.inReplyTo){
      newObj.url = itm.inReplyTo.url;
    }
  }

  if(!itm.url){
    itm.url = false;
  }


  newObj.title = itm.title;
  newObj.content = itm.object.content;

  if (itm.verb === 'share') {
    newObj.authorName = itm.object.actor.displayName;
    newObj.usernameID = itm.object.actor.id;
    newObj.authorProfileUrl = itm.object.actor.url;
    newObj.authorAvatarUrl = itm.object.actor.image.url;
  } else {
    newObj.authorName = itm.actor.displayName;
    newObj.usernameID = itm.actor.id;
    newObj.authorProfileUrl = itm.actor.url;
    newObj.authorAvatarUrl = itm.actor.image.url;
  }

  newObj.imageUrl = '';

  newObj.sourceSiteName = 'Google+';
  newObj.sourceId = itm.id;
  newObj.sourcePlatform = 'googleplus';
  newObj.sourceSiteUrl = 'http://plus.google.com';
  newObj.sourceSiteLogoUrl = '';
  newObj.dateCollected = new Date();
  newObj.datePosted = itm.published;
  newObj.dateLastValidated = new Date();
  newObj.comment = '';
  newObj.tags = '';
  newObj.status = 0;

   
  
// Get replies - 
  if(itm.object.replies){
    newObj.hasReplies = itm.object.replies.totalItems;
  }



  if (itm.attachments) {
    photos = itm.attachments.filter(function(att) {
      if (att.objectType === 'photo') {
        return true;
      }
    });

    if (photos.length) {
      newObj.imageUrl = photos[0].fullimage.url;
    }
  }

  return newObj;

}




function getReplies(activityid, cb){
    request.get({
      'uri': apiURL + 'activities/'+activityid+'/comments',
      'qs': {
        'key': config.google_api_key
      },
      'json': true
    }, function(err, response, body) {

       body.items = body.items.map(normaliseResults);
        cb(null, body.items);
    });

}




function getUserPosts(user_id, cb) {
  request.get({

    'uri': apiURL + 'people/' + user_id + '/activities/public',
    'qs': {
      'key': config.google_api_key
    },
    'json': true
  }, function(err, response, body) {
    if (err) {
      cb(err);
      return;
    }
    body.items = body.items.map(normaliseResults);
    cb(null, body.items);
  });
}

function getSearchResults(type, query, cb) {
  request.get({
    'uri': apiURL + type,
    'qs': {
      'key': config.google_api_key,
      'query': query,
      'maxResults': 20,
      'orderBy': 'recent'
    },
    'json': true
  }, function(err, response, body) {
    if (err) {
      cb(err);
      return;
    }

    if(type === 'activities'){
      body.items = body.items.map(normaliseResults);
    }

    cb(null, body.items);
  });
}

module.exports = {
  query: function(obj, cb) {
    if (['search-activities', 'user', 'search-people','activity-comments'].indexOf(obj.channel) === -1) {
      obj.channel = 'search-activities';
      // cb(new Error('No valid Google+ channel requested'));
    }

    if (obj.channel === 'user') {
      getUserPosts(obj.q, cb);
    }

    if (obj.channel === 'search-activities') {
      getSearchResults('activities', obj.q, cb);
    }
    if (obj.channel === 'search-people') {
      getSearchResults('people', obj.q, cb);
    }

     if (obj.channel === 'activity-comments') {
      getReplies(obj.q, cb);
    }
  }

};