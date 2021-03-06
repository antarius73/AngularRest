/**
 * Created by baptiste on 20/03/16.
 */
'use strict';

angular.module('angularRestApp')

  .controller('LoginController',
    ['$scope', '$rootScope', '$location', '$cookieStore', 'AuthenticationService',
      function ($scope, $rootScope, $location, $cookieStore, AuthenticationService) {

        $scope.Logout = function () {
          AuthenticationService.ClearCredentials();
          $location.path('/login');
        };

        $scope.isNotLogin = function () {
          var globals = $cookieStore.get('globals');
          if (!angular.isDefined(globals) || !angular.isDefined(globals.currentUser)) {
            return false;
          }

          return true;
        };

        $scope.login = function () {
          // reset login status
          AuthenticationService.ClearCredentials();

          $scope.dataLoading = true;
          AuthenticationService.Login($scope.username, $scope.password, function (response) {
            if (response.success) {
              AuthenticationService.SetCredentials($scope.username, $scope.password);
              $location.path('/');
            } else {
              $scope.error = response.message;
              $scope.dataLoading = false;
            }
          });
        };
      }]);
