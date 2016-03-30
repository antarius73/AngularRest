'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:ConfirmdeletepersonCtrl
 * @description
 * # ConfirmdeletepersonCtrl
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('ConfirmdeletepersonCtrl', function ($scope, $uibModalInstance, $translate, $filter) {


    var personToDel = $scope.persons[$scope.delIndex];
    $scope.title= 'DeleteConfirm';

    $scope.message = $filter('translate')('DeletePersonMessage',
      {
        FirstName : personToDel.FirstName,
        LastName : personToDel.LastName
      });


    $scope.validate= function(){
      $uibModalInstance.close();
    }
    $scope.cancel= function(){
      $uibModalInstance.dismiss('cancel');
    }


  });
