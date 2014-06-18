'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */
var Model = require('../models/itemcollection');
var Base = require('./base');
var controller = new Base(Model);

controller.queryFilter = function(query, req){
  query.populate('items');
};

module.exports = function(app, cb) {
  controller.initRoutes('itemcollection',app, function(err, cb){
    if(err){
      return cb(err);
    }
  });
  return cb(null, controller);
};