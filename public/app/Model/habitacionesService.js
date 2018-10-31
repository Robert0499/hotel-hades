angular.module('hadesApp').service('habitacionesService', habitacionesService);
habitacionesService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function habitacionesService($http, host, $httpParamSerializerJQLike) {
  this.agregarHabitacion = data => {
    return $http.post(host + 'piso', $httpParamSerializerJQLike(data));
  };
  this.getCategoria = () => {
    return $http.get(host + 'categorias');
  };
  this.getPiso = () => {
    return $http.get(host + 'piso');
  };
  this.getHabitacion = () => {
    return $http.get(host + 'gethabitaciones');
  };
}
