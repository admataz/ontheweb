
var _ = require('lodash');
var webitem = require('../models/webitem');



function getPlatformFromURL(url){
  var platform = 'www';

  if(url.indexOf('twitter.com') >= 0){
    platform = 'twitter';
  }
  if(url.indexOf('facebook') >= 0){
    platform = 'twitter';
  }
  if(url.indexOf('google.com') >= 0){
    platform = 'googleplus';
  }

  return platform;
}



function getItemIDFromURL(url, platform){


}


module.exports = function(app){
  app.post('import', function(req,res, next){
    var doc;
    if (!req.body) {
      return next(new Error("Submitted content is missing"));
    }
    if (!req.is('json')) {
      return next(new Error("Content-Type must be application/json"));
    }


    var platform = getPlatformFromURL(req.body.url);

    

    // doc = new we(req.body);
    // doc.save(function(err, itm, num) {
    //   if (err) {
    //     // console.log(err);
    //     return next(new restify.InvalidContentError(err.toString()));
    //   }

    //   var p = url.parse(req.url);

    //   res.header("location", p.pathname + "/" + itm._id);
    //   // I know it's not proper to send content back with a POST request, but the client (jquery) can't get the header
    //   // and I need the new id
    //   res.send(201, itm);
    //   return next();
    // });

  });


};