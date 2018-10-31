angular.module('hadesApp').service('loginService', loginService);
loginService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function loginService($http, host, $httpParamSerializerJQLike) {
  this.auth = data => {
    return $http.post(host + 'auth', $httpParamSerializerJQLike(data));
  };
}
