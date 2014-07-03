/**
 * 1. First off we need to get the exisitng feed items that are in Drupal into the On The Web system
 * 2. We need to check these against the live versions - some of them are outdated
 * 3. re-import the new feed items into Drupal
 *
 *
 * 4. Going forward we need to regularly keep check of items that have been changed or deleted On The Web
 *
 * - Facebook items: these are single posts (and perhaps comments later)
 * (how will we check comments)
 * - Twitter items - can do 100 at a time queries to get the latest or null versions of a post
 * - google+ activities and comments?
 * - www?
 *
 * We can get a feed of Drupal items - with the link back to the source ID and the node id
 *
 * Need to find a way to diff items - so we know what's changed - ideally ref as close to source as possible.
 *
 * Need to add excerpt capability to the front end
 *
 *
 *
 *
 */

// var app = require('../');
var jf = require('jsonfile');
var async = require('async');
var testdata = jf.readFileSync('data/to_import.json');
var node_ids = Object.keys(testdata.items);
var url = require('url');
var _ = require('lodash');

var db = require('../app/srv/db');

var tw = require('../app/models/twitter');
var fb = require('../app/models/facebook');
var webitem = require('../app/models/webitem');

var twitter_ids = {};
var twitter_ids_all = [];
var twitter_ids_paged = [];
var twitter_hydrated = [];

var fb_ids = {};

function getPlatformFromURL(url) {
  var platform = 'www';

  if (url.indexOf('twitter.com') >= 0) {
    platform = 'twitter';
  }
  if (url.indexOf('facebook') >= 0) {
    platform = 'facebook';
  }
  if (url.indexOf('google.com') >= 0) {
    platform = 'googleplus';
  }

  return platform;
}

/**
 * Process twitter items and generate a refreshed twitter json
 */
function processTwitter(cb) {
  while (twitter_ids_all.length) {
    twitter_ids_paged.push(twitter_ids_all.splice(0, 100).join(','));
  }
  async.each(twitter_ids_paged, function(twitm, twcb) {
      tw.bulkCheck(twitm, function(err, results) {
        _.each(results, function(itm, i) {
          twitter_ids[i].item = itm;
        });
        twcb();
      });
    },
    function(err) {
      if (err) {
        return (console.log(err));
      }
      jf.writeFileSync('./data/twitter_hydrated.json', twitter_ids);

      var items = _.filter(_.pluck(twitter_ids, 'item'), function(itm) {
        if (itm) {
          return true;
        }
        return false;
      });

      webitem.create(items, function(err, twitems) {
        if (err) {
          return cb(err);
        }
        console.log(twitems);
        console.log('done with twitter loop');
        cb();
      });
    }
  );
}

/**
 * Process facebook items and generate a refreshed json file
 */
function processFacebook(cb) {

  var fbkeys = Object.keys(fb_ids);

  // debugger;
  async.each(fbkeys, function(itm, fbcb) {
      fb.importItem(itm, function(err, result) {
        if (err) {
          return fbcb(err);
        }
        // debugger;
        fb_ids[itm].item = result;
        fbcb();
      });

    },
    function(err) {

      if (err) {
        return cb(err);
      }

      jf.writeFileSync('./data/fb_hydrated.json', fb_ids);
      var items = _.filter(_.pluck(fb_ids, 'item'), function(itm) {
        if (itm) {
          return true;
        }
        return false;
      });
      async.each(items, function(itm, cb) {
        
          var doc = new webitem(itm);
          debugger;
          doc.save(function(err, saved, num) {
            if (err) {
              return console.log(err);
            }
            console.log(saved);
            cb();
          });
        },
        function(err) {
          if(err){
            return cb(err);
          }

          console.log('done with facebook loop');
          cb(null);
        });

      // webitem.create(items, function(err, fbitems){
      //   if(err){
      //     return cb(err);
      //   }
      //   debugger;
      //   console.log(fbitems);
      //   console.log('done with facebook loop');
      //   cb();
      // });
    });

}


function process_nodeids(){



async.each(node_ids, function(itm, cb) {

    var theURL = testdata.items[itm].message_item_url;
    var p = getPlatformFromURL(theURL);
    var theId;

    if (!theURL) {
      return cb();
    }
    var pathSegments = url.parse(theURL)['pathname'].split('/');

    // console.log(pathSegments.pop());
    if (p === 'twitter') {
      theId = pathSegments.pop();
      twitter_ids[theId] = {
        node_id: itm,
        twitter_id: theId
      };
      twitter_ids_all.push(theId);
    }
    if (p === 'facebook') {
      theId = pathSegments[1] + '_' + pathSegments[3];
      fb_ids[theId] = {
        node_id: itm,
        facebook_id: theId
      };
    }

    cb();
  },

  function(err) {
    if (err) {
      return console.log('there was a problem looping though');
    }

    async.parallel([processFacebook], function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('finished looping facebook and twitter');
    });

  }
);

}

db(function(err){

  process_nodeids();
});


// console.log(node_ids);