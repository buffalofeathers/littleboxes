angular.module('AudioApp', ['ngResource', 'ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider  
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/music', {
            templateUrl: 'views/music.html',
            controller: 'MusicController'
        })
        .when('/code', {
            templateUrl: 'views/code.html',
            controller: 'CodeController'
        })
        .when('/literature', {
            templateUrl: 'views/literature.html',
            controller: 'LiteratureController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);