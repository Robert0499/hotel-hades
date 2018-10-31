angular
  .module('hadesApp')
  .controller('habitacionesController', habitacionesController);
habitacionesController.$inject = [
  '$scope',
  '$state',
  'host',
  'habitacionesService',
  'Upload',
  '$sessionStorage',
  'img'
];
function habitacionesController(
  $scope,
  $state,
  host,
  habitacionesService,
  Upload,
  $sessionStorage,
  img
) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.datos.id_rol == 2
  ) {
    habitacionesService
      .getCategoria()
      .then(result => {
        $scope.categoria = result.data;
      })
      .catch(err => {
        console.log(err);
      });
    habitacionesService
      .getPiso()
      .then(result => {
        $scope.piso = result.data;
      })
      .catch(err => {
        console.log(err);
      });
    $scope.crearHabitacion = () => {
      Upload.upload({
        url: host + 'habitaciones',
        data: {
          foto: $scope.foto,
          numero_habitacion: $scope.numero_habitacion,
          id_categoria: $scope.id_categoria,
          id_piso: $scope.id_piso,
          descripcion: $scope.descripcion
        },
        headers: { 'Content-Type': 'application/json' }
      }).then(
        function(resp) {
          toastr.success(resp.data.message);
          $('#exampleModal').modal('hide');
          $('#form1')[0].reset();
          habitacionesService
            .getHabitacion()
            .then(result => {
              result.data.datos.forEach(e => {
                e.foto = img + e.foto;
              });
              result.data.datos.forEach(e => {
                if (e.disponible == 1) {
                  e.disponible = 'Libre';
                } else {
                  e.disponible = 'Ocupado';
                }
              });
              $scope.array = result.data.datos;
              $scope.total = result.data;
            })
            .catch(err => {
              console.log(err);
            });
        },
        function(resp) {
          toastr.error(resp.data.message);
        }
      );
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

  habitacionesService
    .getHabitacion()
    .then(result => {
      result.data.datos.forEach(e => {
        e.foto = img + e.foto;
      });
      result.data.datos.forEach(e => {
        if (e.disponible == 1) {
          e.disponible = 'Libre';
        } else {
          e.disponible = 'Ocupado';
        }
      });
      $scope.array = result.data.datos;
      $scope.total = result.data;
    })
    .catch(err => {
      console.log(err);
    });
}
