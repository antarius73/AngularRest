'use strict';

/**
 * @ngdoc function
 * @name anguarRestApp.controller:CrudwcfCtrl
 * @description
 * # CrudwcfCtrl
 * Controller of the anguarRestApp
 */
angular.module('anguarRestApp')
  .controller('CrudwcfCtrl', function ($resource, $scope, DTOptionsBuilder, DTColumnDefBuilder,$rootScope) {

    $scope.employees=[];

    // methode direct mais pour le mode generation auto de la dtt
    //$scope.dtOptions = DTOptionsBuilder.fromSource('http://jsonplaceholder.typicode.com/photos').withDataProp('images');
    $scope.dtOptions = DTOptionsBuilder.newOptions();

    $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3)
    ];
    // fixe la langue de la grille à la volé
    $scope.dtOptions.withLanguageSource('resources/datatable-'+$rootScope.Userlanguage+'.json');
    $resource('http://svr-grind.tesfri.intra/ServiceWcfApp.svc/Person/ListAll/').query().$promise.then(function(employees) {
      $scope.employees = employees.slice(0,200);
    });
    // aces a une source mode normal pour mémoire
    //$http.get('http://jsonplaceholder.typicode.com/photos').
    //success(function(data){
    //  $scope.images =data.slice(0,500);
    //});

  });
