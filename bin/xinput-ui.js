#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));

if(argv.debug)process.env.DEBUG='xinput-ui:*';

var server = require('../server');
var exec = require('child_process').exec;
var format = require('util').format;


setTimeout(function(){
  var address = server.address();
  var command = format('google-chrome http://%s:%s', address.address, address.port);
  exec(command, function(){
    console.log(arguments);
  });
}, 500);
