angular
  .module('hadesApp')
  .controller('recepcionistaController', recepcionistaController);
recepcionistaController.$inject = [
  '$scope',
  '$state',
  'host',
  '$sessionStorage'
];
function recepcionistaController($scope, $state, host, $sessionStorage) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.datos.id_rol == 2
  ) {
    $scope.pisos = () => {
      $state.go('pisos');
    };
    $scope.hab = () => {
      $state.go('habitaciones');
    };
  } else {
    $state.go('login');
  }
  $scope.cerrar = () => {
    $sessionStorage.$reset();
    $state.go('login');
  };
}
