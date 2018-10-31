angular.module('hadesApp').controller('loginController', loginController);
loginController.$inject = [
  '$scope',
  '$state',
  'host',
  'loginService',
  '$sessionStorage'
];
function loginController($scope, $state, host, loginService, $sessionStorage) {
  if (typeof $sessionStorage.usuario == 'undefined') {
    $scope.ingreso = () => {
      loginService
        .auth($scope.user)
        .then(result => {
          console.log(result);
          $sessionStorage.usuario = result.data;
          if ($sessionStorage.usuario.datos.id_rol == 1) {
            $state.go('reportes');
            toastr.success('Sesión iniciada');
          } else if ($sessionStorage.usuario.datos.id_rol == 2) {
            $state.go('recepcionista');
            toastr.success('Sesión iniciada');
          }
        })
        .catch(err => {
          console.log(err);
          toastr.error('Datos incorrectos');
        });
    };
  } else if ($sessionStorage.usuario.datos.id_rol == 1) {
    $state.go('reportes');
  } else if ($sessionStorage.usuario.datos.id_rol == 2) {
    $state.go('recepcionista');
  }
}
