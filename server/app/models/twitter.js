var Twitter = require('mtwitter');
var config = require('../settings');

var twit = new Twitter({
  consumer_key: config.twitter_consumer_key,
  consumer_secret: config.twitter_consumer_secret,
  application_only: true
});

function getUserTimeline(username, cb) {
  // Get a user's timeline
  twit.get('statuses/user_timeline', {
    screen_name: username,
    count: 100
  }, function(err, item) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, item);
  });

}

function getSearchResult(query, cb) {

  twit.get('search/tweets', {
    q: query,
    result_type: 'recent',
    count: 100,
    lang: 'en',

  }, function(err, item) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, item);
  });

}

module.exports = {
  query: function(obj, cb) {
    if(['timeline','search'].indexOf(obj.channel) === -1){
      cb(new Error('No valid twitter channel requested'));
    }

    if (obj.channel === 'timeline') {
      getUserTimeline(obj.username, cb);
    }

    if (obj.channel === 'search') {
      getSearchResult(obj.q, cb);
    }


  }

};