var static = require('node-static');
var fs = require('fs');

var fileServer = new static.Server('./src');

require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    fs.exists('./src/' + request.url, function(exists) {
      if (exists) {
        fileServer.serve(request, response);
      } else {
        fs.readFile('./src/index.html', function(err, html) {
          response.end(html);
        });
      }
    });
  }).resume();
}).listen(8010);

console.log('Started server');