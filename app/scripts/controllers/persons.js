'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:PersonsController
 * @description
 * # CrudWcfController
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('PersonsController', function ($resource, $scope, DTOptionsBuilder, DTColumnDefBuilder, $rootScope, Persons, Person) {

    $scope.persons = [];
    $scope.dataLoaded = false;
    $scope.dataLoadedSpinner = false;
    $scope.showError = false;


    $scope.searchData = function () {
      // start loading
      $scope.dataLoadedSpinner = true;

      Persons.query().$promise.then(function (persons) {
        $scope.persons = persons.slice(0, 200);
        $scope.dataLoaded = true;
        $scope.dataLoadedSpinner = false;
        $rootScope.existingPersonnsData = true;
      }, function (error) {
        $scope.showError = true;
        $scope.dataLoadedSpinner = false;
        $scope.errorMessage = "errorMessages.dataServerConnexionError";
        // pour le moment pas possible de faire remonter le message angular

      });

    };

    if ($rootScope.existingPersonnsData) $scope.searchData();


    $scope.deletePerson = function (id) {
      Person.delete({id: id});
    };





    $scope.dtOptions = DTOptionsBuilder.newOptions();


    $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3),
      DTColumnDefBuilder.newColumnDef(4)
    ];


    // fixe la langue de la grille à la volé
    $scope.dtOptions.withLanguageSource('resources/datatable-' + $rootScope.Userlanguage + '.json');


  });
