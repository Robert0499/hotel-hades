angular
  .module('hadesApp')
  .service('recepcionistaService', recepcionistaService);
recepcionistaService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function recepcionistaService($http, host, $httpParamSerializerJQLike) {}
