'use strict';
/**
 * Router and controller functions in the same place - there's not much complexity in the way of routing
 */
var fs = require('fs');
var path = require('path');

module.exports = function(app) {

  app.get(/\/admin\/?.*/, function(req, res, next) {


    var body, status, root, thepath, url;

    root = process.cwd();
    url = req.url;
    if(req.url =='/admin' || req.url =='/admin/'){
      url = '/index.html'
    }

    thepath = path.join(root + url);

    // console.log(req.url);

    fs.exists(thepath, function(exists) {

      var toserve = path.join(root + '/admin/index.html');

      if (exists) {
        toserve = thepath;
      }




      fs.readFile(toserve, 'utf8', function(err, data) {
        var contentType = 'text/html';
        if (err) {
          body = err.message;
          res.writeHead(500, {
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': 'text/html'
          });
        } else {

          if(path.extname(thepath) === '.css'){
            contentType = 'text/css';
          }
          if(path.extname(thepath) === '.js'){
            contentType = 'text/javascript';
          }
          
          if(path.extname(thepath) === '.png'){
            // contentType = 'image/png';
            // 
            data = fs.readFileSync(thepath);
           res.writeHead(200, {'Content-Type': 'image/png' });
           res.end(data, 'binary');
          }



          body = data;
          res.writeHead(200, {
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': contentType
          });
        }


        res.write(body);
        res.end();

      });


    });


  });

};

