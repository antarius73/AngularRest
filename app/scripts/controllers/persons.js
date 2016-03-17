'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:PersonsController
 * @description
 * # CrudWcfController
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('PersonsController', function ($resource, $scope, DTOptionsBuilder, DTColumnDefBuilder, $rootScope, Persons) {

    $scope.persons = [];

    $scope.dtOptions = DTOptionsBuilder.newOptions();

    $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3),
      DTColumnDefBuilder.newColumnDef(4)
    ];
    // fixe la langue de la grille à la volé
    $scope.dtOptions.withLanguageSource('resources/datatable-'+$rootScope.Userlanguage+'.json');

    Persons.query().$promise.then(function (persons) {
      $scope.persons = persons.slice(0, 200);
    });


  });
