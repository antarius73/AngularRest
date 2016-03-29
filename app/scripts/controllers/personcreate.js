'use strict';

/**
 * @ngdoc function
 * @name angularRestApp.controller:PersoncreateCtrl
 * @description
 * # PersoncreateCtrl
 * Controller of the angularRestApp
 */
angular.module('angularRestApp')
  .controller('PersoncreateCtrl', function ($scope, Person, $filter) {

    $scope.format = "MM/dd/yyyy";
    $scope.formTitle = "createPersonTitle";

    $scope.AviableTypes = ["SC", "IN","SP","EM","VC","GC"];

    $scope.person = new Person();
    // utilisation d'une variable tmp pour la gestion visuel de la date
    $scope.person.modifiedDateUI = new Date($filter('date')(new Date(), "MM/dd/yyyy"));
    $scope.person.TypeString = $scope.AviableTypes[0];

    $scope.openDatePicker = function(){
      $scope.isDatePickerOpen =true;
    };

    $scope.update = function(user) {

      $scope.showErrorsCheckValidity = true;


      // reconversion de la date dans le format REST
      user.ModifiedDateString = new Date( $filter('date')($scope.person.modifiedDateUI,"MM/dd/yyyy")) ;
      user.$save().then(function () {
        console.log("retour");
        $location.path('/persons');
      });



    };

  });
