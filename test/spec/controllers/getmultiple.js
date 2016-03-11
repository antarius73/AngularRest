'use strict';

describe('Controller: GetmultipleCtrl', function () {

  // load the controller's module
  beforeEach(module('anguarRestApp'));

  var GetmultipleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetmultipleCtrl = $controller('GetmultipleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GetmultipleCtrl.awesomeThings.length).toBe(3);
  });
});
