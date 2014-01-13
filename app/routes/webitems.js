'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */
require ('mongoose-pagination');

function queryFilter(item, req){
  var pg = 1, num = 20; //, q, searchfields;
  
  if(req.query.pg){
    pg = req.query.pg;
  }
  if(req.query.num){
    num = req.query.num;
  }
  item.paginate(pg,num);

  //do search query
  // if(req.query.q){
  //   q =  new RegExp(req.query.q, "i");
  // }
}

module.exports = function(app) {
  require('./base')('WebItem', 'webitem', app, queryFilter);
};

