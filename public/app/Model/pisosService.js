angular.module('hadesApp').service('pisosService', pisosService);
pisosService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function pisosService($http, host, $httpParamSerializerJQLike) {
  this.agregarPisos = data => {
    return $http.post(host + 'piso', $httpParamSerializerJQLike(data));
  };
  this.getPisos = () => {
    return $http.get(host + 'getpisos');
  };
}
