'use strict';

var restify = require('restify'),
  config = require('../settings');

var server = restify.createServer({
  name: "OnTheWeb"
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser({ mapParams: false }));

server.use(restify.jsonp());

server.use(restify.fullResponse());
server.use(restify.bodyParser());

server.listen(config.http.port);

module.exports = server;

