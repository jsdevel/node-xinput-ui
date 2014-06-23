'use strict';

require('express-crud');
var debug = require('debug')('xinput-ui:app');
var express = require('express');
var app = module.exports = express();
var glob = require('glob');
var resolve = require('path').resolve;
var bowerPath = resolve(__dirname, 'bower');
var publicPath = resolve(__dirname, 'public');
var bodyParser = require('body-parser');

debug('bowerPath  is %s', bowerPath);
debug('publicPath is %s', publicPath);

app.use(express.static(bowerPath));
app.use(express.static(publicPath));

app.use(bodyParser.json());

app.param('deviceId', require('./middleware/deviceParamHandler'));

glob.sync('./routes/*.js', {cwd: __dirname}).forEach(function(route){
  require(route)(app);
});
