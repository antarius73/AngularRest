'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:PersonformCtrl
 * @description
 * # PersonformCtrl
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('PersonformCtrl', function ($scope, Person, $routeParams, $filter, $location) {

    $scope.format = "MM/dd/yyyy";

    Person.get({id: $routeParams.id}).$promise.then(function (person) {
      $scope.person = person;
      // utilisation d'une variable tmp pour la gestion visuel de la date
      $scope.person.modifiedDateUI = new Date( $filter('date')($scope.person.ModifiedDateString,"MM/dd/yyyy")) ;
    });

    $scope.openDatePicker = function(){
      $scope.isDatePickerOpen =true;
    };

    $scope.update = function(user) {
      // reconversion de la date dans le format REST
      user.ModifiedDateString = new Date( $filter('date')($scope.person.modifiedDateUI,"MM/dd/yyyy")) ;
      user.$update({id: user.Id}).then(function () {
        console.log("retour");
        $location.path('/persons');
      });

    };
  });
