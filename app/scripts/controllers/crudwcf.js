'use strict';

/**
 * @ngdoc function
 * @name anguarRestApp.controller:CrudwcfCtrl
 * @description
 * # CrudwcfCtrl
 * Controller of the anguarRestApp
 */
angular.module('anguarRestApp')
  .controller('CrudwcfCtrl', function ($resource, $scope, DTOptionsBuilder, DTColumnDefBuilder,$rootScope,AllEmployees) {

    $scope.employees=[];

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

    $scope.employees = AllEmployees.query().$promise.then(function(employees) {
        $scope.employees = employees.slice(0,200);
    });


  });
