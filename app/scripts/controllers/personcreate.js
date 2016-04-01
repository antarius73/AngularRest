'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:PersoncreateCtrl
 * @description
 * # PersoncreateCtrl
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('PersoncreateCtrl', function ($scope, Person,Persons, $filter, $location, PERSON_TYPE) {

  // methodes

    $scope.initUiData = function(){
      $scope.UiDateformat = "dd/MM/yyyy";
      $scope.restServiceDateFormat = "MM/dd/yyyy";
      $scope.formTitle = "createPersonTitle";
      $scope.AviableTypes = PERSON_TYPE;
      $scope.isDatePickerOpen =false;
      $scope.showErrorsCheckValidity = false;
    }

    $scope.initPerson = function(){
      $scope.person = new Person();
      // utilisation d'une variable tmp pour la gestion visuel de la date
      $scope.person.modifiedDateUI = new Date();
      $scope.person.TypeString = $scope.AviableTypes[0];
    }

    $scope.openDatePicker = function(){
      $scope.isDatePickerOpen =true;
    };

    $scope.update = function(user) {
      // reconversion de la date dans le format REST
      user.ModifiedDateString = $filter('date')($scope.person.modifiedDateUI,$scope.restServiceDateFormat);
      $scope.showErrorsCheckValidity = true;

      user.$create().then(function () {
        // retour sur la liste principale
        $location.path('/persons');
      });
    };

    // initialisations du formulaire
    $scope.initUiData();
    $scope.initPerson();

  });
