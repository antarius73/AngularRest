'use strict';

describe('Service: authenticationservice', function () {

  // load the service's module
  beforeEach(module('angularRestApp'));

  // instantiate service
  var login;

  beforeEach(inject(function (Login) {
    login = Login;
  }));

  /*it('Should be defined', function () {
    expect(login).toBeDefined();
  });

  it('Should return an array', function () {
    var someone = login.query();
    expect(persons).toEqual(jasmine.any(Array));
    //expect(persons.length).toBe(20);
  });*/
});
