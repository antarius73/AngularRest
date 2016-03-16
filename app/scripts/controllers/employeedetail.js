'use strict';

/**
 * @ngdoc function
 * @name anguarRestApp.controller:EmployeedetailCtrl
 * @description
 * # EmployeedetailCtrl
 * Controller of the anguarRestApp
 */
angular.module('anguarRestApp')
  .controller('EmployeedetailCtrl', function ($scope, Employee, $routeParams) {



    $scope.employee = Employee.get({ id: $routeParams.employeeId });

  });
