'use strict';

describe('Controller: UserconfigCtrl', function () {

  // load the controller's module
  beforeEach(module('angularRestApp'));

  var UserconfigCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserconfigCtrl = $controller('UserconfigCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(UserconfigCtrl.awesomeThings.length).toBe(3);
  //});
});
