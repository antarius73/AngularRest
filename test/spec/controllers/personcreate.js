'use strict';

describe('Controller: PersoncreateCtrl', function () {

  // load the controller's module
  beforeEach(module('angularRestApp'));

  var PersoncreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersoncreateCtrl = $controller('PersoncreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersoncreateCtrl.awesomeThings.length).toBe(3);
  });
});
