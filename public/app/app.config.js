(() => {
  angular.module('hadesApp').config(config);

  config.$inject = [
    '$httpProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    'state'
  ];

  function config(
    $httpProvider,
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    state
  ) {
    $httpProvider.defaults.headers['Content-Type'] =
      'Access-Control-Allow-Origin: *';
    $httpProvider.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8;';
    $httpProvider.defaults.headers.put['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.delete = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/inicio');
    state($stateProvider, 'inicio');
    state($stateProvider, 'recepcionista');
    state($stateProvider, 'pisos');
    state($stateProvider, 'reportes');
    state($stateProvider, 'habitaciones');
    state($stateProvider, 'login');
  }
})();
