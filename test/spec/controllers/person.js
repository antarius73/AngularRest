'use strict';

describe('Controller: PersonController avec une personne défini', function () {

  // load the controller's module
  beforeEach(module('angularRestApp', function($translateProvider){
    $translateProvider.translations('fr_FR',{});
  }));

  var PersonController,
    scope,
    mockBackend,
    wcf;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, Person, _WCF_URL_BASE_) {

    var personMock = Person;
    mockBackend = TestHttp.helpers.initHttpBackend(_$httpBackend_);
    scope = $rootScope.$new();
    WCF_URL_BASE = _WCF_URL_BASE_;

    PersonController = $controller('PersonController', {
      $scope: scope,
      $routeParams: {id: '13'},
      //personHandler : mockBackend.whenGET('https://svr-grind.tesfri.intra:8081/Persons/23/').respond({"FirstName":"toto","Id":"23","LastName":"greg","ModifiedDateString":"2002-02-23T00:00:00.0000000","Title":null,"TypeString":"VC" }),

      // place here mocked dependencies
      person:Person
    });
  }));

  it("vérifier le nom d'une personne existante", function () {

    mockBackend.expectGET(WCF_URL_BASE + '/Persons/13/');
    mockBackend.flush();
    expect(scope.person.FirstName).toBe('Janice');
  });
});
