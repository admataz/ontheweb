var graph = require('fbgraph');
var config = require('../settings');

graph.setAccessToken(getAuthToken());


function getPagePosts(page_id, cb){

}

function getUserPosts(user_id, cb){
  graph.get(user_id+"/feed", function(err, item) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, item);
  });
}

function getSearchResults( query, cb){
  graph.search(query, function(err, item) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, item);
  });
}

/**
 * compile an auth token
 * We could request a token - but FB accepts this format too - which is simpler - no extra round trip
 * @return string concatanated app id and secret
 */
function getAuthToken(){
  return config.facebook_app_id+"|"+config.facebook_app_secret;
}

// https://developers.facebook.com/docs/graph-api/using-graph-api
// https://developers.facebook.com/docs/graph-api/reference/page/feed/
// https://developers.facebook.com/docs/graph-api/reference/user/feed/
// 
// 
// https://developers.facebook.com/docs/graph-api/reference
// https://developers.facebook.com/docs/reference/api/search/
// https://developers.facebook.com/docs/facebook-login/access-tokens/



module.exports = {
  query: function(obj, cb) {
    if(['page','search', 'user', 'group'].indexOf(obj.channel) === -1){
      cb(new Error('No valid facebook channel requested'));
    }

    if (obj.channel === 'user') {
      getUserPosts(obj.user_id, cb);
    }

    if (obj.channel === 'search') {
      getSearchResults(obj, cb);
    }


  }

};