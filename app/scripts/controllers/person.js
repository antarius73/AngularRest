'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:PersonController
 * @description
 * # PersonController
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('PersonController', function ($scope, Person, $routeParams) {
    Person.get({id: $routeParams.id}).$promise.then(function (person) {
      $scope.person = person;
    });
  });
