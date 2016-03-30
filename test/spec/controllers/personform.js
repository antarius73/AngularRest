'use strict';

describe('Controller: PersonformCtrl', function () {

  // load the controller's module
  beforeEach(module('angularRestApp'));

  var PersonformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonformCtrl = $controller('PersonformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(PersonformCtrl.awesomeThings.length).toBe(3);
  //});
});
