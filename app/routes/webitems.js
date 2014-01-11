'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */

module.exports = function(app) {
  app.get('/webitem/testme', function(req,res,next){
    res.send('yes');
    next();
  });

  


  require('./base')('WebItem', 'webitem', app);
};

