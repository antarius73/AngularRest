'use strict';

describe('Controller: ConfirmdeletepersonCtrl', function () {

  // load the controller's module
  beforeEach(module('angularRestApp'));

  var ConfirmdeletepersonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmdeletepersonCtrl = $controller('ConfirmdeletepersonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
   // expect(ConfirmdeletepersonCtrl.awesomeThings.length).toBe(3);
  //});
});
