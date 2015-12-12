angular.module('routes', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'masterCtrl',
      controllerAs: 'master'
    })
    .otherwise({ redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);
