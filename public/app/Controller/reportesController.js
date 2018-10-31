angular.module('hadesApp').controller('reportesController', reportesController);
reportesController.$inject = [
  '$scope',
  '$state',
  'host',
  '$sessionStorage',
  'reportesService'
];
function reportesController(
  $scope,
  $state,
  host,
  $sessionStorage,
  reportesService
) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.datos.id_rol == 1
  ) {
    reportesService
      .reportes()
      .then(result => {
        $scope.array = result.data.meses;
        $scope.inasistencias = result.data.total;
        var ctx = $('#myChart');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [
              'Enero',
              'Febrero',
              'Marzo',
              'Abril',
              'Mayo',
              'Junio',
              'Julio',
              'Agosto',
              'Septiembre',
              'Octubre',
              'Noviembre',
              'Diciembre'
            ],
            datasets: [
              {
                label: '# de Reservas',
                data: $scope.array,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        });
      })
      .catch(err => {
        console.log(err.data);
      });
  } else {
    $state.go('login');
  }

  $scope.cerrar = () => {
    $sessionStorage.$reset();
    $state.go('login');
  };
}
