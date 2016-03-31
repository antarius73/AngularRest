'use strict';

describe('Controller: PersonController avec une personne défini', function () {

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

  it("vérifier le nom d'une personne existante", function () {

    mockBackend.expectGET('https://svr-grind.tesfri.intra:8081/Persons/23/');
    mockBackend.flush();
    expect(scope.person.FirstName).toBe('toto');
  });
});

describe('Controller: PersonController avec une personne indéfini', function () {

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
      $routeParams:{id:'12343354'},
      personHandler : mockBackend.whenGET('https://svr-grind.tesfri.intra:8081/Persons/12343354/').respond({}),

      // place here mocked dependencies
      person:Person
    });
  }));

  it('réponse à un Id de personne innexistante', function () {

    mockBackend.expectGET('https://svr-grind.tesfri.intra:8081/Persons/12343354/');
    mockBackend.flush();
    expect(scope.person.FirstName).toBeUndefined();
  });

});
