'use strict';

module.exports = function (app) {
  
  app.get('/', function (req, res, next) {
    res.send({"message": "There is nothing to see here"});
  });


  require('./webitems')(app, function(err, controller){});
  require('./itemcollection')(app, function(err, controller){});
  require('./admin')(app, function(err, controller){});
  require('./feedsource')(app, function(err, controller){});





};