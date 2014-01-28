'use strict';

module.exports = function (app) {
  
  app.get('/', function (req, res, next) {
    res.send({"message": "There is nothing to see here"});
  });
  require('./webitems')(app);
  require('./itemcollection')(app);

  require('./admin')(app);



};