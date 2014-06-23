'use strict';

function PropertyController($scope, Properties){
  var currentValue = $scope.property.value;

  $scope.update = function(){
    if(currentValue !== $scope.property.value){
      Properties
      .update($scope.device.id, $scope.property.name, $scope.property.value)
      .success(function(){
        $scope.hasError = false;
        $scope.error = '';
        currentValue = $scope.property.value;
      })
      .error(function(data, status){
        $scope.property.value = currentValue;
        $scope.error = 'Server responded with ' + status;
        $scope.hasError = true;
      });
    }
  };
}
