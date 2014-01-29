var static = require('node-static');

var fileServer = new static.Server('./src');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        // console.log(request.url);
        fileServer.serve(request, response);
    }).resume();  
}).listen(8010);

console.log('Started server');