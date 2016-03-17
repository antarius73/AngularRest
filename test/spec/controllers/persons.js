'use strict';

describe('Controller: PersonsController', function () {

  // load the controller's module
  beforeEach(module('angularRestApp'));

  var PersonsController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonsController = $controller('PersonsController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonsController.awesomeThings.length).toBe(3);
  });
});
