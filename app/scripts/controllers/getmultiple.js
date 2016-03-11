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
    $http.get('http://jsonplaceholder.typicode.com/photos').
    success(function(data){
      $scope.images =data.slice(0,500);
    });

  });
