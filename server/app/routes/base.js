'use strict';
/**
 * Standard Rest routes - for resuability across the controllers
 *
 *
 * TODO: decouple from the restify error reporting
 * TODO: look at a callback based filter/extendable method - chaining handlers with next()?
 * TODO: remove the requirement to pass the path in here - would prefer to make it a callback so that detail remains in
 * the contoller
 *
 *
 *
 */

var restify = require('restify');
var url = require('url');
// var Model = require('../models/' + modelName);

function DefaultRoutes(Model) {
  this.model = Model;
  return this;
}

module.exports = DefaultRoutes;




/**
 * ROUTER FUNCTIONS
 * 
 * This is a set of default functions to enable the default RESTful endpoints
 * As each router handler is run in the scope of the Router, not the Controller - the function is  wrapped in a closure
 * and returned so we can access the relevant controller object in the closure scope. 
 *
 * These can be overridden on a controller level
 * 
 */

/**
 * Get a single item
 */
DefaultRoutes.prototype.getItem = function() {
  var c = this;

  return function(req, res, next) {
    var query = c.model.findById(req.params.id);
    query = c.queryFilterItem(query, req);
    query.exec(function(err, result) {
      if (err) {
        return next(new restify.ResourceNotFoundError("Can't find that item"));
      }
      if (result) {
        res.send(200, result);
        return next();
      } else {
        return next(new restify.ResourceNotFoundError("Can't find that item"));
      }
    });
  };
};


/**
 * add customisations to the query - sort, search, limit, etc. - should make in chainable
 * @param  object query the existing query. 
 * @param  object req the request. 
 * @return object query the existing query.
 */
DefaultRoutes.prototype.queryFilter = function(query, req){
  return query;
};
DefaultRoutes.prototype.queryFilterItem = function(query, req){
  return query;
};


/**
 * Initialise the query - this is done in the scope of the controller
 * @return {[type]} [description]
 */
DefaultRoutes.prototype.getItemsListInitQuery = function(req){
  return this.model.find();
};





/**
 * Get a list of items - and their count
 */
DefaultRoutes.prototype.getItemsList = function() {
  var c = this;
  return function(req, res, next) {

    var query = c.getItemsListInitQuery(req);
    var countquery;
    query = c.queryFilter(query, req);

    query.exec(function(err, results) {
      var ret = {};
      var itemsdata;
      if (err) {
        return next(new restify.RestError("Can't process your request"));
      }

      //store the results in a local var
      itemsdata = results;

      //clear the sort options - will break count
      query.options = {};

      //get the count
      countquery = query.count();

      countquery.exec(function(err, count) {
        if (err) {
          return next(new restify.RestError("Can't process your request"));
        }

        ret.total_items = count;
        ret[c.model.modelName] = itemsdata;

        res.send(200, ret);
        return next();
      });

    });
  };
};

/**
 * Generic handler for POST requests (creating new items)
 */
DefaultRoutes.prototype.post = function() {
  var c = this;
  return function(req, res, next) {
    var doc;
    if (!req.body) {
      return next(new restify.InvalidContentError("Submitted content is missing"));
    }
    if (!req.is('json')) {
      return next(new restify.InvalidHeaderError("Content-Type must be application/json"));
    }
    doc = new c.model(req.body);
    doc.save(function(err, itm, num) {
      if (err) {
        // console.log(err);
        return next(new restify.InvalidContentError(err.toString()));
      }

      var p = url.parse(req.url);

      res.header("location", p.pathname + "/" + itm._id);
      // I know it's not proper to send content back with a POST request, but the client (jquery) can't get the header
      // and I need the new id
      res.send(201, itm);
      return next();
    });
  };
};

/**
 * Generic Handler for PUT requests - update an item  - partial updates work
 */
DefaultRoutes.prototype.put = function() {
  var c = this;
  return function(req, res, next) {
    if (!req.params.id) {
      return next(new restify.MissingParameterError("Item id missing - can't make updates"));
    }

    if (!req.body) {
      return next(new restify.InvalidContentError("Submitted content is missing"));
    }

    if (!req.is('json')) {
      return next(new restify.InvalidHeaderError("Content-Type must be application/json"));
    }

    // don't send the id  - MongoDB will complain as it is immutable
    // this feels like a bit of a hack - there must be a better way? 
    delete req.body._id;

    c.model.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        return next(new restify.RestError(err.toString()));
      }

      var p = url.parse(req.url);

      res.header("location", p.pathname + "/" + result._id);
      res.send(200, {});
      return next();
    });
  };
};

/**
 * Generic Handler for DELETE requests - remove an item
 */
DefaultRoutes.prototype.del = function() {
  var c = this;
  return function(req, res, next) {
    if (!req.params.id) {
      return next(new restify.MissingParameterError("Item id missing - can't make updates"));
    }
    c.model.findByIdAndRemove(req.params.id, function(err, result) {
      res.send(200, {});
      return next();
    });
  };
};





/**
 * Set up the routes for the resource - defaults to the standard set of RESTful endpoints
 * 
 */
DefaultRoutes.prototype.initRoutes = function(resourcePath, app) {
  if (app) {
    app.get(resourcePath + '/:id?', this.getItem());
    app.get(resourcePath + '', this.getItemsList());
    app.post(resourcePath + '', this.post());
    app.put(resourcePath + '/:id', this.put());
    app.del(resourcePath + '/:id', this.del());
  }
};