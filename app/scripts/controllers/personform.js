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

    $scope.AviableTypes = ["SC", "IN", "SP", "EM", "VC", "GC"];

    $scope.getPerson = function () {
      Person.get({id: $routeParams.id}).$promise.then(function (person) {
        $scope.person = person;
        // utilisation d'une variable tmp pour la gestion visuel de la date
        $scope.person.modifiedDateUI = new Date($filter('date')($scope.person.ModifiedDateString, "MM/dd/yyyy"));
        $scope.person.originalFirstName = $scope.person.FirstName;
      });
    };

    $scope.getPerson();


    $scope.setType = function (type) {
      $scope.person.TypeString = type;
    };


    $scope.openDatePicker = function () {
      $scope.isDatePickerOpen = true;
    };


    $scope.resetUnique = function () {
      $scope.personForm.firstname.$setValidity("unique", true);
    };

    $scope.reset = function () {
      $scope.getPerson();
      $scope.personForm.$setPristine();
    };

    $scope.update = function (user) {

      $scope.showErrorsCheckValidity = true;


      // reconversion de la date dans le format REST
      user.ModifiedDateString = new Date($filter('date')($scope.person.modifiedDateUI, "MM/dd/yyyy"));
      user.$update({id: user.Id}).then(function () {
        console.log("retour");
        $location.path('/persons');
      });


    };
  });
