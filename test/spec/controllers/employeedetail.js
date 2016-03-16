'use strict';

describe('Controller: EmployeedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('anguarRestApp'));

  var EmployeedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeedetailCtrl = $controller('EmployeedetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmployeedetailCtrl.awesomeThings.length).toBe(3);
  });
});
