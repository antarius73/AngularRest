'use strict';

describe('Controller: GetsimpleCtrl', function () {

  // load the controller's module
  beforeEach(module('anguarRestApp'));

  var GetsimpleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetsimpleCtrl = $controller('GetsimpleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GetsimpleCtrl.awesomeThings.length).toBe(3);
  });
});
