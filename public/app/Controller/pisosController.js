angular.module('hadesApp').controller('pisosController', pisosCntroller);
pisosCntroller.$inject = [
  '$scope',
  '$state',
  'host',
  'pisosService',
  '$sessionStorage'
];
function pisosCntroller($scope, $state, host, pisosService, $sessionStorage) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.datos.id_rol == 2
  ) {
    pisosService
      .getPisos()
      .then(result => {
        $scope.array = result.data.datos;
        $scope.total = result.data.total;
      })
      .catch(err => {});
    $scope.crearPiso = () => {
      console.log($scope.piso);
      pisosService
        .agregarPisos($scope.piso)
        .then(result => {
          console.log(result);
          toastr.success(result.data.message);
        })
        .catch(err => {
          console.log(err);
          toastr.error(result.data.message);
        });
    };
    $scope.pisos = () => {
      $state.go('pisos');
    };
    $scope.hab = () => {
      $state.go('habitaciones');
    };
    $scope.reser = () => {
      $state.go('recepcionista');
    };
  } else {
    $state.go('login');
  }
  $scope.cerrar = () => {
    $sessionStorage.$reset();
    $state.go('login');
  };
}
