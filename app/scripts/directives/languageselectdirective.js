'use strict';

/**
 * @ngdoc directive
 * @name anguarRestApp.directive:languageSelectDirective
 * @description
 * # languageSelectDirective
 */
angular.module('anguarRestApp')
  .directive('languageSelectDirective', function (LocaleService,$rootScope, LOCALES) {
    'use strict';

    return {
      restrict: 'A',
      replace: true,
      template: ''+
      '<div class="language-select" ng-if="visible">'+
      '<label>'+
      '{{"directives.language-select.Language" | translate}}:'+
      '<select ng-model="currentLocaleDisplayName"'+
      'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
      'ng-change="changeLanguage(currentLocaleDisplayName)">'+
      '</select>'+
      '</label>'+
      '</div>'+
      '',
      controller: function ($scope) {
        $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
        $scope.visible = $scope.localesDisplayNames &&
          $scope.localesDisplayNames.length > 1;

        $scope.changeLanguage = function (locale) {
          LocaleService.setLocaleByDisplayName(locale);

          angular.forEach(LOCALES.locales, function(key, value) {
            if (key == locale) {
              $rootScope.Userlanguage= value;
            }
          });

        };
      }
    };
  });