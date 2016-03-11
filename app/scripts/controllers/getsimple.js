'use strict';

/**
 * @ngdoc function
 * @name anguarRestApp.controller:GetsimpleCtrl
 * @description
 * # GetsimpleCtrl
 * Controller of the anguarRestApp
 */

angular.module('anguarRestApp')
  .controller('GetsimpleCtrl', function ($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    success(function(data){
      $scope.greeting =data;
    });

  });
