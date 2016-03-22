'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:PersonformCtrl
 * @description
 * # PersonformCtrl
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('PersonformCtrl', function ($scope, Person, $routeParams, $filter) {

    $scope.format = "MM/dd/yyyy";

    Person.get({id: $routeParams.id}).$promise.then(function (person) {
      $scope.person = person;

      $scope.modifiedDateUI = new Date( $filter('date')($scope.person.ModifiedDateString,"MM/dd/yyyy")) ;

    });

    $scope.openDatePicker = function(){
      $scope.isDatePickerOpen =true;
    };





  });
