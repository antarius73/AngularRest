'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:PersonsController
 * @description
 * # CrudWcfController
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('PersonsController', function ($resource, $scope, DTOptionsBuilder, DTColumnDefBuilder, $rootScope,
                                             Persons, Person, AuthenticationService, $uibModal, $location) {

    // initialisation des données du ctrl
    $scope.initPersons = function() {
      $scope.persons = [];
    };

    // initialisation des données du ctrl utilisé par la vue
    $scope.initUiData = function() {
      // les données sont elle chargé
      $scope.dataLoaded = false;
      // si vrais affiche le picto de loading dans la vue
      $scope.dataLoadedSpinner = false;
      // si vrais affiche la zone de message d'erreur
      $scope.showError = false;
    };

    // charge la liste des personnes
    $scope.searchData = function () {
      // start loading
      $scope.dataLoadedSpinner = true;

      Persons.query().$promise.then(function (persons) {
        $scope.persons = persons.slice(Math.max(persons.length - 200, 1));
        $scope.dataLoaded = true;
        $scope.dataLoadedSpinner = false;
        $rootScope.existingPersonnsData = true;
      }, function (error) {
        if (error.status == "401") {
          AuthenticationService.ClearCredentials();
          $location.path('/');
        }
        $scope.showError = true;
        $scope.dataLoadedSpinner = false;
        $scope.errorMessage = "errorMessages.dataServerConnexionError";
      });

    };

    // supprimer une personne avec confirmation
    $scope.deletePerson = function (id, index) {
      $scope.delIndex = index;
      $scope.delRscId = id;
      $scope.ConfirmDeleteDialog();
    };

    $scope.sendDeletingOrder = function(){
      Person.remove({id: $scope.delRscId});
      $scope.persons.splice($scope.delIndex, 1);
    };

    // demande de confirmation de la suppression d'un personne
    $scope.ConfirmDeleteDialog = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/confirmdialog.html',
        controller: 'ConfirmdeletepersonCtrl',
        size: 'lg',
        scope: $scope
      });

      modalInstance.result.then(function () {
          $scope.sendDeletingOrder();
        }
      );
    };

    // initialisation de la grille de la vue
    $scope.initGrid= function(){
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
    };


    $scope.initPersons();
    $scope.initUiData();
    $scope.initGrid();
    if ($rootScope.existingPersonnsData) $scope.searchData();

  });
