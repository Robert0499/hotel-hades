angular.module('hadesApp').service('inicioService', inicioService);
inicioService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function inicioService($http, host, $httpParamSerializerJQLike) {
  this.getCategoria = () => {
    return $http.get(host + 'categorias');
  };

  this.getDocuments = () => {
    return $http.get(host + 'tpd');
  };
  this.getHabitaciones = () => {
    return $http.get(host + 'habitaciones');
  };
  this.addReserva = data => {
    return $http.post(host + 'reservaciones', $httpParamSerializerJQLike(data));
  };
}
