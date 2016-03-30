'use strict';

describe('Controller: PersonController', function () {

  // load the controller's module
  beforeEach(module('angularRestApp', function($translateProvider){
    $translateProvider.translations('fr_FR',{});
  }));

  var PersonController,
    scope;

  var mockBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$httpBackend_, Person) {

    var personMock = Person;
    mockBackend = _$httpBackend_;
    scope = $rootScope.$new();

    PersonController = $controller('PersonController', {
      $scope: scope,
      $routeParams:{id:'23'},
      personHandler : mockBackend.whenGET('https://svr-grind.tesfri.intra:8081/Persons/23/').respond({"FirstName":"toto","Id":"23","LastName":"greg","ModifiedDateString":"2002-02-23T00:00:00.0000000","Title":null,"TypeString":"VC" }),
      // place here mocked dependencies
      person:Person
    });
  }));

  it('vérifier nom de la personne', function () {

    mockBackend.expectGET('https://svr-grind.tesfri.intra:8081/Persons/23/');//.respond({"FirstName":"toti","Id":"23","LastName":"greg","ModifiedDateString":"2002-02-23T00:00:00.0000000","Title":null,"TypeString":"VC" });
    mockBackend.flush();
    expect(scope.person.FirstName).toBe('toto');
  });
});
