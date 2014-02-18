'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */

var restify = require('restify'),
  _ = require('lodash'),
  config = require('../settings');


module.exports = function(app) {

  /**
   * proxy and normalise requests to the social media platforms - outsources the request to a model for the relevant platform
   * and returns an array of web items to the format that we need to store them locally
   * 
   * TODO: For the moment I am providing this as a raw HTTP channel - but we may need to provide for more complexity in the
   * query to account for the different interfaces for each API and more complex searches and queries - is this what middleware for?
   * 
   */
  app.get('socialmedia/:platform', function(req, res, next){

    if (!req.params.platform) {
      return next(new restify.MissingParameterError("Social media platform id missing - can't make query"));
    }
    
    if(config.socialmedia_platforms.indexOf(req.params.platform) === -1) {
      return next(new restify.InvalidArgumentError("Social media platform not valid  - should be activated in config, and relevant routers should exist"));
    }

    var platform = require('../models/'+req.params.platform);

    platform.query(req.query, function queryPlatform(err, result){
      if(err){
        return next(err);
      }
      res.send(200, result);
      next();
    });





  });


};

