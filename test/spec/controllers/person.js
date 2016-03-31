'use strict';

describe('Controller: PersonController avec une personne défini', function () {

  // load the controller's module
  beforeEach(module('angularRestApp', function($translateProvider){
    $translateProvider.translations('fr_FR',{});
  }));

  var PersonController, scope, mockBackend;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$httpBackend_, Person) {

    mockBackend = TestHttp.helpers.initHttpBackend(_$httpBackend_);
    scope = $rootScope.$new();

    PersonController = $controller('PersonController', {
      $scope: scope,
      $routeParams:{id:'13'},
      person:Person
    });
  }));

  it("vérifier le nom d'une personne existante", function () {

    mockBackend.expectGET('https://svr-grind.tesfri.intra:8081/Persons/13/');
    mockBackend.flush();
    expect(scope.person.FirstName).toBe('Janice');
  });
});

describe('Controller: PersonController avec une personne indéfini', function () {

  // load the controller's module
  beforeEach(module('angularRestApp', function($translateProvider){
    $translateProvider.translations('fr_FR',{});
  }));

  var PersonController, scope, mockBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$httpBackend_, Person) {

    mockBackend = _$httpBackend_;
    scope = $rootScope.$new();

    PersonController = $controller('PersonController', {
      $scope: scope,
      $routeParams:{id:'12343354'},
      personHandler : mockBackend.whenGET(TestHttp.helpers.wcfRoot()+'/Persons/12343354/').respond({}),
      person:Person,
    });
  }));

  it('réponse à un Id de personne innexistante', function () {
    mockBackend.expectGET(TestHttp.helpers.wcfRoot()+'/Persons/12343354/');
    mockBackend.flush();
    expect(scope.person.FirstName).toBeUndefined();
  });

});
