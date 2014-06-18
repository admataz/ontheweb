'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */

var Model = require('../models/webitem');
var Base = require('./base');
var restify = require('restify');


var controller = new Base(Model);


controller.getItemsList = function(){

  var c = this;
  return function(req, res, next) {

    var query = c.getItemsListInitQuery(req);
    var countquery;
    c.queryFilter(query, req);

    query.execPagination(function(err, paginationObj) {
      var results =  paginationObj.results;
      var ret = {};
      var itemsdata;
      if (err) {
        return next(new restify.RestError("Can't process your request"));
      }


      //store the results in a local var
      itemsdata = results;

      // //clear the sort options - will break count
      // query.options = {};

      ret.meta = {};
      ret.meta.cursors= {};
      ret.meta.cursors.perPage = paginationObj.perPage;
      ret.meta.cursors.thisPage = paginationObj.thisPage;
      ret.meta.cursors.after = paginationObj.after;
      ret.meta.cursors.before = paginationObj.before;
      
      ret[c.model.modelName] = itemsdata;

      //get the count
      countquery = c.model.count();
      c.queryFilter(countquery, req);

      countquery.exec(function(err, count) {
        if (err) {
          return next(new restify.RestError("Can't process your request"));
        }
        ret.meta.cursors.total_items = count;
        

        res.send(200, ret);
        return next();
      });

    });
  };
};


controller.queryFilter = function(query, req){
  var q;

  if (req.query.q) {
    q = new RegExp(req.query.q, "i");
    query.or([{
      title: q
    }, {
      content: q
    }, {
      url: q
    }, {
      comment: q
    }, {
      tags: q
    }]);
  }


};

controller.getItemsListInitQuery = function(req){
  var pgParams = {};
  if(req.query.before){
    pgParams.before = req.query.before;
  }
  return this.model.paginate(pgParams);
};


module.exports = function(app, cb) {
  controller.initRoutes('webitem',app, function(err, cb){
    if(err){
      return cb(err);
    }
  });
  return cb(null, controller);
};


