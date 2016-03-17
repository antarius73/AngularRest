'use strict';

/**
 * @ngdoc overview
 * @name angularRestApp
 * @description
 * # angularRestApp
 *
 * Main module of the application.
 */
angular
  .module('angularRestApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'datatables',// table de données HTMl avancée
    'pascalprecht.translate',// angular-translate
    'tmh.dynamicLocale'// angular-dynamic-locale

  ])
  .constant('LOCALES', {
    'locales': {
      'fr_FR': 'Francais',
      'en_US': 'English'
    },
    'preferredLocale': 'fr_FR'
  })
  .config(['$resourceProvider', function ($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }])
  .config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
  })
  .config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'resources/locale-',// path to translations files
      suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('fr_FR');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage
  })
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  })
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
      .when('/userConfig', {
        templateUrl: 'views/userconfig.html',
        controller: 'UserconfigCtrl',
        controllerAs: 'userConfig'
      })
      .when('/persons', {
        templateUrl: 'views/persons.html',
        controller: 'PersonsController',
        controllerAs: 'persons'
      })
      .when('/person/:id', {
        templateUrl: 'views/person.html',
        controller: 'PersonController',
        controllerAs: 'person'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

function dtLanguageConfig(DTDefaultOptions,$rootScope) {
  $rootScope.Userlanguage = "fr_FR";
  DTDefaultOptions.setLanguageSource("resources/datatable-fr_FR.json");
}
