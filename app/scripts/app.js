'use strict';

/**
 * @ngdoc overview
 * @name anguarRestApp
 * @description
 * # anguarRestApp
 *
 * Main module of the application.
 */
angular
  .module('anguarRestApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'datatables'

  ])
  .run(dtLanguageConfig)
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/getsimple', {
        templateUrl: 'views/getsimple.html',
        controller: 'GetsimpleCtrl',
        controllerAs: 'getsimple'
      })
      .when('/getmultiple', {
        templateUrl: 'views/getmultiple.html',
        controller: 'GetmultipleCtrl',
        controllerAs: 'getmultiple'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

function dtLanguageConfig(DTDefaultOptions) {
  DTDefaultOptions.setLanguageSource("//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json");
}
