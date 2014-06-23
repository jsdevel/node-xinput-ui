'use strict';

var xinputUi = angular.module('xinputUi', []);
xinputUi.factory('Devices', ['$http', function($http){
  return {
    get: function(){
      return $http.get('/devices').then(function(response){
        return response.data;
      });
    }
  };
}]);
