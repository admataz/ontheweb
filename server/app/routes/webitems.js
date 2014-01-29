'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */
require ('mongoose-pagination');

function queryFilter(item, req){
  var pg = 1, num = 20, sort_by='updatedAt', order='desc'; //, q, searchfields;
  var sortobj = {};

  if(req.query.page){
    pg = req.query.page;
  }
  if(req.query.per_page){
    num = req.query.per_page;
  }
  if(req.query.sort_by){
    sort_by = req.query.sort_by;

    if(req.query.order){
      order = req.query.order;
    }
    
  }
    sortobj[sort_by] = order;
    item.sort(sortobj);


  item.paginate(pg,num);

  //do search query
  // if(req.query.q){
  //   q =  new RegExp(req.query.q, "i");
  // }
}

module.exports = function(app) {
  require('./base')('webitem', 'webitem', app, queryFilter);
};

