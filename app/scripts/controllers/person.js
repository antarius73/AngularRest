'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:PersonController
 * @description
 * # PersonController
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('PersonController', function ($scope, Person, AuthenticationService, $routeParams, $location) {
    Person.get({id: $routeParams.id}).$promise.then(function (person) {
      console.log(person);
      $scope.person = person;
      if(!angular.isDefined($scope.person.FirstName) ){
        $location.path('/persons');
      }

    },function(error){
      if (error.status === "401") {
        AuthenticationService.ClearCredentials();
        $location.path('/login');
      }
      console.log("error:"+error.status+ " "+error.statusText);
    });
  });
