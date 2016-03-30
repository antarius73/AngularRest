'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:PersonsController
 * @description
 * # CrudWcfController
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('PersonsController', function ($resource, $scope, DTOptionsBuilder, DTColumnDefBuilder, $rootScope, Persons, Person, $uibModal) {

    $scope.persons = [];
    $scope.dataLoaded = false;
    $scope.dataLoadedSpinner = false;
    $scope.showError = false;


    $scope.searchData = function () {
      // start loading
      $scope.dataLoadedSpinner = true;

      Persons.query().$promise.then(function (persons) {
        $scope.persons = persons.slice(Math.max(persons.length - 200, 1));
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


    $scope.deletePerson = function (id, index) {
      $scope.delIndex = index;
      $scope.delRscId = id;
      $scope.ConfirmDeleteDialog(index);
    };


    $scope.ConfirmDeleteDialog = function (index) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/confirmdialog.html',
        controller: 'ConfirmdeletepersonCtrl',
        size: 'lg',
        scope: $scope
      });

      modalInstance.result.then(function () {
          console.log("validate");
          //console.log("index:"+index);
          Person.remove({id: $scope.delRscId});
          $scope.persons.splice($scope.delIndex, 1);

        },
        function () {
          console.log("dismiss");
        }
      );
    }


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
