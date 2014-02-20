var Twitter = require('mtwitter');
var config = require('../settings');

var twit = new Twitter({
  consumer_key: config.twitter_consumer_key,
  consumer_secret: config.twitter_consumer_secret,
  application_only: true
});



function normaliseResults(itm,i){
      var newObj = {};
      newObj.url = 'http://twitter.com/'+itm.user.screen_name+'/status/'+itm.id_str;
      newObj.title = 'Tweet by '+itm.user.name;
      newObj.content = itm.text;
      newObj.imageUrl = '';
      newObj.geotags = itm.geo;
      newObj.authorName = itm.user.name;
      newObj.authorProfileUrl = 'http://twitter.com/'+itm.user.screen_name;
      newObj.authorAvatarUrl = itm.user.profile_image_url;
      newObj.sourceSiteName = 'Twitter';
      newObj.sourceSiteUrl = 'http://twitter.com';
      newObj.sourceSiteLogoUrl = '';
      newObj.inReplyTo = itm.in_reply_to_status_id;
      newObj.dateCollected = new Date();
      newObj.datePosted = itm.created_at;
      newObj.dateLastValidated = new Date();
      newObj.comment = '';
      newObj.tags = '';
      newObj.status = 0;


      if(itm.entities.media){
        newObj.imageUrl = itm.entities.media[0].media_url;
      }

      return newObj;

    }


function getUserTimeline(username, cb) {
  // Get a user's timeline
  twit.get('statuses/user_timeline', {
    screen_name: username,
    count: 100
  }, function(err, result) {
    if (err) {
      cb(err);
      return;
    }
    result = result.map(normaliseResults);
    cb(null, result);

  });

}

function getSearchResult(query, cb) {

  twit.get('search/tweets', {
    q: query,
    result_type: 'recent',
    count: 100,
    lang: 'en',

  }, function(err, result) {
    if (err) {
      cb(err);
      return;
    }
    result.statuses = result.statuses.map(normaliseResults);
    cb(null, result.statuses);
  });

}

module.exports = {
  query: function(obj, cb) {
    if(['user','search'].indexOf(obj.channel) === -1){
      cb(new Error('No valid twitter channel requested'));
    }

    if (obj.channel === 'user') {
      getUserTimeline(obj.q, cb);
    }

    if (obj.channel === 'search') {
      getSearchResult(obj.q, cb);
    }


  }
};




/*


 */