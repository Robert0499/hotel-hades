angular.module('hadesApp').controller('inicioController', inicioController);
inicioController.$inject = ['$scope', '$state', 'host', 'inicioService', 'img'];
function inicioController($scope, $state, host, inicioService, img) {
  $scope.open = () => {
    if (
      $('#salida').val().length > 0 &&
      $('#llegada').val().length > 0 &&
      $('#categoria').val().length > 0
    ) {
      $('#show1').modal('show');
    } else {
      toastr.info('Debe seleccionar una fecha y una categoria');
    }
  };

  inicioService
    .getCategoria()
    .then(result => {
      $scope.array = result.data;
    })
    .catch(err => {
      console.log(err);
    });
  inicioService
    .getDocuments()
    .then(result => {
      $scope.documentos = result.data;
    })
    .catch(err => {});

  inicioService
    .getHabitaciones()
    .then(result => {
      result.data.forEach(e => {
        e.foto = img + e.foto;
      });
      $scope.habitacion = result.data;
    })
    .catch(err => {});

  $scope.reservar = () => {
    // console.log($scope.user);
    inicioService
      .addReserva($scope.user)
      .then(result => {
        console.log(result);
        toastr.success(result.data.message);
        $('#show1').modal('hide');
        $('#form1')[0].reset();
      })
      .catch(err => {
        console.log(err);
        toastr.error(err.data);
      });
    if ($scope.user.numero_personas > 2) {
      toastr.info('Se alojarán dos personas por habitación');
      inicioService
        .addReservar($scope.user)
        .then(result => {
          console.log(result);
          toastr.success(result.data.message);
          $('#show1').modal('hide');
          $('#form1')[0].reset();
        })
        .catch(err => {
          console.log(err);
          toastr.error(err.data);
        });
    }
  };
}
