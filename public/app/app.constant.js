angular.module('hadesApp').constant('state', (stateprovider, name) => {
  stateprovider.state(name, {
    url: '/' + name,
    controller: name + 'Controller',
    templateUrl: 'app/View/' + name + '.html',
    resolve: {
      loadMyCtrl: [
        '$ocLazyLoad',
        $ocLazyLoad => {
          return $ocLazyLoad.load([
            {
              files: [
                'app/Controller/' + name + 'Controller.js',
                'app/css/' + name + 'Style.css',
                'app/Model/' + name + 'Service.js'
              ]
            }
          ]);
        }
      ]
    }
  });
});

angular
  .module('hadesApp')
  .constant('host', 'http://10.72.138.243/hades-api/public/api/');
angular
  .module('hadesApp')
  .constant('img', 'http://10.72.138.243/hades-api/files/');
