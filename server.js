'use strict';

var http = require('http');
var app = require('./app');
var server = http.createServer(app);
var debug = require('debug')('xinput-ui:server');

module.exports = server;

server.listen(0, '127.0.0.1', function(){
  var address = server.address();
  debug('server.listen args: %j', arguments);
  debug('server.address(): %j', address);
  console.log('xinput-ui listenting at http://%s:%s', address.address, address.port);
});
