'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */


/**
 * optional query filter to apply to get functions
 */
function queryFilter(item){
  item.populate('items', 'url title');
  item.select('title items');
}


module.exports = function(app) {
  require('./base')('ItemCollection', 'itemcollection', app, queryFilter);
};
