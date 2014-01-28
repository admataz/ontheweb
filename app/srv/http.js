'use strict';

var restify = require('restify'),
  config = require('../settings');

var server = restify.createServer({
  name: "OnTheWeb",
  
  // formatters: {
  //   "application/json": function(req, res, body) {

  //     console.log(body.toString());

  //     if (body instanceof Error && body.name === 'InvalidContentError') {
  //       return {
  //         code: 'ValidationError',
  //         message: body.toString()
  //       };
  //     } else {
  //       var data = JSON.stringify(body);
  //       res.setHeader('Content-Length', Buffer.byteLength(data));
  //       return (data);
  //     }
  //   }
  // }

});


server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser({
  mapParams: false
}));

server.use(restify.jsonp());
server.use(restify.bodyParser());
server.use( restify.CORS( {origins: ['*']}) );
server.use(restify.fullResponse());


server.get(/\/static\/?.*/, restify.serveStatic({
  directory: 'public',
  default:'index.html'
}));

server.get(/\/manage\/?.*/, restify.serveStatic({
  directory: 'admin',
  default:'index.html'
}));




server.listen(config.http_port);
module.exports = server;