'use strict';

var xinput = require('xinput');

module.exports = function(app){
  app.crud('devices', {
    read: function(query, cb){
      console.log(query);
      xinput.list(cb);
    }
  });
};
