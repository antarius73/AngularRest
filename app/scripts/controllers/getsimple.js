'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:GetsimpleCtrl
 * @description
 * # GetsimpleCtrl
 * Controller of the angularRestApp
 */

angular.module('angularRestApp')
  .controller('GetsimpleCtrl', function ($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    success(function(data){
      $scope.greeting =data;
    });

  });
