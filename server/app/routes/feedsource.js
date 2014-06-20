'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */

var restify = require('restify');
var config = require('../settings');
var _ = require('lodash');
var webitem = require('../models/webitem');

module.exports = function(app) {
  /**
   * proxy and normalise requests to the social media platforms - outsources the request to a model for the relevant platform
   * and returns an array of web items to the format that we need to store them locally
   *
   * TODO: For the moment I am providing this as a raw HTTP channel - but we may need to provide for more complexity in the
   * query to account for the different interfaces for each API and more complex searches and queries - is this what middleware for?
   *
   */
  app.get('socialmedia', function(req, res, next) {
    if (!req.query.platform) {
      return next(new restify.MissingParameterError("Social media platform id missing - can't make query"));
    }
    if (config.socialmedia_platforms.indexOf(req.query.platform) === -1) {
      return next(new restify.InvalidArgumentError("Social media platform not valid  - should be activated in config, and relevant routers should exist"));
    }
    var platform = require('../models/' + req.query.platform);
    platform.query(req.query, function queryPlatform(err, result) {
      if (err) {
        return next(err);
      }

      var urls = _.pluck(result,'url');

      webitem.find().in('url',urls).exec(function(err, existing){
        result.forEach(function(itm,i){
          var exists = _.find(existing,function(ex){
            return (ex.get('url') === itm.url);
          });
          if(exists){
            exists.set("alreadyCollected", true);
            result[i] = exists;
          } else  {
            itm.alreadyCollected = false;
          }
        });

        res.send(200, result);
        next();
      });


      
    });
  });
};
