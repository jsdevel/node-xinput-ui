'use strict';

var errHandler = require('err-handler');
var xinput = require('xinput');

module.exports = function(req, res, next){
  var deviceId = req.params.deviceId;
  xinput.list(errHandler(next, function(devices){
    var device = devices.filter(byId(deviceId))[0];
    var err;

    if(!device)err = {status: 404};

    req.device = device;

    req.query.deviceId = device.id;

    next(err);
  }));
};

function byId(id){
  return function(device){
    return '' + device.id === '' + id;
  };
}
