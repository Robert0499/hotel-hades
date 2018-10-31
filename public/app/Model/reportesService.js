angular.module('hadesApp').service('reportesService', reportesService);
reportesService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function reportesService($http, host, $httpParamSerializerJQLike) {
  this.reportes = () => {
    return $http.get(host + 'reportes');
  };
}
