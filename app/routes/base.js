'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */

var restify = require('restify');
var _ = require('lodash');




module.exports = function(modelName, resourcePath, app){

  var Model = require('../models/'+modelName);

  /**
   * Handle GET requests (return single items, or lists of items)
   */
  function get(req, res, next) {
    var conds = {};
    if (req.params.id) {
      Model.findById(req.params.id, function(err, result) {
        if (err) {
          return next(new restify.ResourceNotFoundError("Can't find that item"));
        }
        if (result) {
          res.send(200, result);
          next();
        } else {
          return next(new restify.ResourceNotFoundError("Can't find that item"));
        }
      });

    } else {

      // make this a search id there is a query string
      if(Object.keys(req.query).length){
        conds = _.mapValues(req.query, function(itm){
          return new RegExp(itm, "i");
        });
      }

      Model.find(conds,function(err, results) {
        if (err) {
          return next(new restify.RestError("Can't process your request"));
        }
        res.send(200, results);
        next();
      });
    }

  }



  /**
   * Generic handler for POST requests (creating new items)
   */
  function post(req, res, next) {
    var doc;
    if(!req.body){
      return next(new restify.InvalidContentError("Submitted content is missing"));
    }
    if(!req.is('json')){
      return next(new restify.InvalidHeaderError("Content-Type must be application/json"));
    }
    doc = new Model(req.body);
    doc.save(function(err, itm, num){
        if(err){
          return next(new restify.InvalidContentError(err));
        }
        res.header("location",resourcePath+"/"+itm._id);
        res.send(201);
        next();
      });
  }

  /**
   * Generic Handler for PUT requests - update an item  - partial updates work
   */
  function put(req, res, next) {
    if (!req.params.id) {
      return next(new restify.InvalidParameterError("Item id missing - can't make updates"));
    }

    if(!req.body){
      return next(new restify.InvalidContentError("Submitted content is missing"));
    }

    if(!req.is('json')){
      return next(new restify.InvalidHeaderError("Content-Type must be application/json"));
    }

    Model.findByIdAndUpdate(req.params.id, req.body, function(err, result){
        if(err){
          return next(new restify.ResourceNotFoundError("Item id missing - can't make updates"));
        }
        res.header("location",resourcePath+"/"+result._id);
        res.send(200);
        next();
      });
  }


  /**
   * Generic Handler for DELETE requests - remove an item
   */
  function del(req, res, next) {
    if (!req.params.id) {
      return next(new restify.InvalidParameterError("Item id missing - can't make updates"));
    }
    Model.findByIdAndRemove(req.params.id, function(err, result){
      res.send(200);
      next();
    });


  }



  app.get(resourcePath+'/:id?', get);
  app.get(resourcePath+'', get);
  app.post(resourcePath+'', post);
  app.put(resourcePath+'/:id', put);
  app.del(resourcePath+'/:id', del);



};

