'use strict';

describe('Controller: PersonController', function () {

  // load the controller's module
  beforeEach(module('angularRestApp'));

  var PersonController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonController = $controller('PersonController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonController.awesomeThings.length).toBe(3);
  });
});
