'use strict';

var xinput = require('xinput');

module.exports = function(app){
  app.crud('devices/:deviceId/properties/:propertyId', {
    read: function(query, cb){
      xinput.listProps(query.deviceId, cb);
    },
    update: function(id, query, model, cb){
      xinput.setProp(query.deviceId, id, model.value, cb);
    }
  });
};
