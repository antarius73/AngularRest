'use strict';

/**
 * @ngdoc function
 * @name anguarRestApp.controller:GetmultipleCtrl
 * @description
 * # GetmultipleCtrl
 * Controller of the anguarRestApp
 */


angular.module('anguarRestApp')
  .controller('GetmultipleCtrl', function ($scope, $http) {
    $http.get('https://api.github.com/users/hadley/orgs').
    success(function(data){
      $scope.githubUsers =data;
    });

  });
