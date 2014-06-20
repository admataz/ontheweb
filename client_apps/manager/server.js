var static = require('node-static');
var fs = require('fs');

var fileServer = new static.Server('./src');
var fileServer2 = new static.Server('../bookmarklet/dist');

require('http').createServer(function(request, response) {
  console.log(request.url);

  request.addListener('end', function() {
    fs.exists('./src/' + request.url, function(exists) {
      if (exists) {
        fileServer.serve(request, response);
      } else {

          if(request.url.indexOf('/bookmarklet') === 0){
              var seg = request.url.split('/');
              seg.shift();
              seg.shift();
              request.url = '/'+seg.join('/');
              console.log(request.url);
              fileServer2.serve(request, response, function(err, r){
              console.log(err);

            });
          } else {
            fs.readFile('./src/index.html', function(err, html) {
              response.end(html);
            });
          }
        
      }
    });
  }).resume();
}).listen(8010);

console.log('Started server');