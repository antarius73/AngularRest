'use strict';

/**
 * @ngdoc overview
 * @name angularRestApp
 * @description
 * # angularRestApp
 *
 * Main module of the application.
 */

function dtLanguageConfig(DTDefaultOptions, $rootScope) {
  $rootScope.Userlanguage = "fr_FR";
  //DTDefaultOptions.setLanguageSource("../resources/datatable-fr_FR.json");
}

angular
  .module('angularRestApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'datatables',// table de données HTMl avancée
    'pascalprecht.translate',// angular-translate
    'tmh.dynamicLocale',// angular-dynamic-locale
    'angular-ladda', // btn avec loading integré
    'ui.bootstrap'
  ])
  .constant('LOCALES', {
    'locales': {
      'fr_FR': 'Francais',
      'en_US': 'English'
    },
    'preferredLocale': 'fr_FR'
  })
  .constant('PERSON_TYPE',["SC", "IN","SP","EM","VC","GC"])

  .constant('WCF_URL_BASE', 'https://svr-grind.tesfri.intra:8081')

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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        hideMenus: true
      })

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
      .when('/personForm/:id', {
        templateUrl: 'views/personform.html',
        controller: 'PersonformCtrl',
        controllerAs: 'personForm'
      })
      .when('/personCreate', {
        templateUrl: 'views/personform.html',
        controller: 'PersoncreateCtrl',
        controllerAs: 'personCreate'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(dtLanguageConfig)
  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
      // keep user logged in after page refresh
      $rootScope.globals = $cookieStore.get('globals') || {};
      if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
      }
      $rootScope.$on('$locationChangeStart', function () {
        // redirect to login page if not logged in
        if ($location.path() !== '/login' && (!$rootScope.globals.currentUser)) {
          $location.path('/login');
        }
      });
    }]);

