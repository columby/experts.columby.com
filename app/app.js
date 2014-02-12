'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile/:uid', {templateUrl: 'partials/experts/view.html', controller: 'ExpertsViewCtrl'});
  $routeProvider.when('/', {templateUrl: 'partials/experts/index.html', controller: 'ExpertsIndexCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]).

config(['$locationProvider', function($locationProvider){
  $locationProvider
    .html5Mode(false)
    .hashPrefix('!');
}])
;