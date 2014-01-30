'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */

var restify = require('restify');
var _ = require('lodash');




module.exports = function(modelName, resourcePath, app, queryFilter){

  var Model = require('../models/'+modelName);

  /**
   * Handle GET requests (return single items, or lists of items)
   */
  function get(req, res, next) {
    if (req.params.id) {
      return getItem(req, res, next);
    } else {
      return getItemsList(req,res,next);
    }
  }

/**
 * Get a single item
 */
  function getItem(req, res, next){
    var item = Model.findById(req.params.id);


    if(queryFilter){
      queryFilter(item, req);
    }


    item.exec(function(err, result) {
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
  }


/**
 * Get a list of items
 */
  function getItemsList(req,res,next){
    var items = Model.find();
    var countquery;

    if(queryFilter){
      queryFilter(items, req);
    }

    // 


    items.exec(function(err, results) {
      var ret = {};
      var itemsdata;
      if (err) {
        return next(new restify.RestError("Can't process your request"));
      }
      
      //store the results in a local var
      itemsdata = results;
      
      //clear the sort options - will break count
      items.options={};

      //get the count
      countquery = items.count();

      countquery.exec(function(err, count){
          if (err) {
            return next(new restify.RestError("Can't process your request"));
          }

          ret.total_items = count;
          ret[modelName] = itemsdata;

          res.send(200, ret);
          next();
      });
      

    });
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
          // console.log(err);
          return next(new restify.InvalidContentError(err.toString()));
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

    // don't send the id  - MongoDB will complain as it is immutable
    // this feels like a bit of a hack - there must be a better way? 
    delete req.body._id;

    Model.findByIdAndUpdate(req.params.id, req.body, function(err, result){
        if(err){
          return next(new restify.RestError(err.toString()));
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

  // assuming that if the app is available we should initialise the app with the routes
  if(app){
    app.get(resourcePath+'/:id?', get);
    app.get(resourcePath+'', get);
    app.post(resourcePath+'', post);
    app.put(resourcePath+'/:id', put);
    app.del(resourcePath+'/:id', del);
  }



  // return the methods 
  return {
    get: get, 
    getItemsList: getItemsList,
    getItem: getItem,
    post: post,
    put: put,
    del:del
  };

};
