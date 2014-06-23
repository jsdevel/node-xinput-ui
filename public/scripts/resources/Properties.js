xinputUi.factory('Properties', ['$http', function($http){
  return {
    read: function(deviceId){
      return $http
      .get('/devices/' + deviceId + '/properties')
      .then(function(response){
        return response.data;
      });
    },
    update: function(deviceId, name, value){
      return $http
      .put('/devices/' + deviceId + '/properties/' + name, {value: value}, {transformResponse: null});
    }
  };
}]);
