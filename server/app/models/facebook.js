var graph = require('fbgraph');
var config = require('../settings');

graph.setAccessToken(getAuthToken());


function normaliseResults(itm,i){



      var newObj = {};
      newObj.url = 'http://facebook.com/'+itm.id.replace('_','/posts/');
      newObj.title = itm.name;
      newObj.content = itm.message;
      newObj.imageUrl = '';
      // newObj.geotags = itm.geo;
      newObj.authorName = itm.from.name;
      newObj.usernameID = itm.from.id;
      newObj.authorProfileUrl = 'http://facebook.com/'+itm.from.id;
      newObj.authorAvatarUrl = 'http://graph.facebook.com/'+itm.from.id+'/picture?type=square';
      newObj.sourceSiteName = 'Facebook';
      newObj.sourceSiteUrl = 'http://facebook.com';
      newObj.sourceSiteLogoUrl = '';
      // newObj.inReplyTo = itm.in_reply_to_status_id;
      newObj.dateCollected = new Date();
      newObj.datePosted = itm.created_time;
      newObj.dateLastValidated = new Date();
      newObj.comment = '';
      newObj.tags = '';
      newObj.status = 0;


      if(itm.picture){
        newObj.imageUrl = itm.picture;
      }

      if(!newObj.title){
        newObj.title = 'Facebook post by '+ itm.from.name;
      }

      return newObj;

    }


function getUserPosts(user_id, cb){
  graph.get(user_id+"/feed", function(err, result) {
    if (err) {
      cb(err);
      return;
    }

    result.data = result.data.map(normaliseResults);
    cb(null, result.data);

  });
}


function getSearchResults( query, cb){
  graph.search({type:"post",q:query}, function(err, result) {
    if (err) {
      cb(err);
      return;
    }
    result.data = result.data.map(normaliseResults);



    cb(null, result.data);
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
    if(['search', 'user'].indexOf(obj.channel) === -1){
      cb(new Error('No valid facebook channel requested'));
    }

    // search for users and pages works the same way in the API
    if (obj.channel === 'user') {
      getUserPosts(obj.q, cb);
    }

    if (obj.channel === 'search') {
      getSearchResults(obj.q, cb);
    }


  }

};