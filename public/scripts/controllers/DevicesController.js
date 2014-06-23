'use strict';

function DevicesController($scope, Devices){
  Devices.get().then(function(devices){
    $scope.devices = devices;
  });
}
