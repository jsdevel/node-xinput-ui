'use strict';

function DeviceController($scope, Properties){
  $scope.getProperties = function(){
    if($scope.properties)delete $scope.properties;
    else Properties.read($scope.device.id).then(function(response){
      $scope.properties = response;
    });
  };
}
