'use strict';

describe('Directive: languageSelectDirective', function () {

  // load the directive's module
  beforeEach(module('angularRestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  //it('should make hidden element visible', inject(function ($compile) {
  //  element = angular.element('<language-select-directive></language-select-directive>');
  //  element = $compile(element)(scope);
  //  expect(element.text()).toBe('this is the languageSelectDirective directive');
  //}));
});
