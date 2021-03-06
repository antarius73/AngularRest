'use strict';

describe('Service: personService', function () {

  // load the service's module
  beforeEach(module('angularRestApp'));

  // instantiate service
  var personService;

  beforeEach(inject(function (Persons) {
    personService = Persons;
  }));

  it('Should be defined', function () {
    expect(personService).toBeDefined();
  });

  it('Should return an array', function () {
    var persons = personService.query();
    expect(persons).toEqual(jasmine.any(Array));
    //expect(persons.length).toBe(20);
  });
});
