'use strict';

/**
 * @ngdoc function
 * @name anguarRestApp.controller:GetmultipleCtrl
 * @description
 * # GetmultipleCtrl
 * Controller of the anguarRestApp
 */


angular.module('anguarRestApp')
  .controller('GetmultipleCtrl', function ($resource, $scope, $http, DTOptionsBuilder, DTColumnDefBuilder) {

    $scope.images=[];

    // methode direct mais pour le mode generation auto de la dtt
    //$scope.dtOptions = DTOptionsBuilder.fromSource('http://jsonplaceholder.typicode.com/photos').withDataProp('images');
    $scope.dtOptions = DTOptionsBuilder.newOptions();

    $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1).notSortable(),
      DTColumnDefBuilder.newColumnDef(2).notVisible(),
      DTColumnDefBuilder.newColumnDef(3)
   ];
    // fixe la langue de la grille à la volé
    $scope.dtOptions.withLanguageSource('//cdn.datatables.net/plug-ins/1.10.11/i18n/English.json');
    $resource('http://jsonplaceholder.typicode.com/photos').query().$promise.then(function(images) {
      $scope.images = images.slice(0,200);
    });
    // aces a une source mode normal pour mémoire
    //$http.get('http://jsonplaceholder.typicode.com/photos').
    //success(function(data){
    //  $scope.images =data.slice(0,500);
    //});

  });
