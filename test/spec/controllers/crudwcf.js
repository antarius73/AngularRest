'use strict';

describe('Controller: CrudwcfCtrl', function () {

  // load the controller's module
  beforeEach(module('anguarRestApp'));

  var CrudwcfCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrudwcfCtrl = $controller('CrudwcfCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrudwcfCtrl.awesomeThings.length).toBe(3);
  });
});
