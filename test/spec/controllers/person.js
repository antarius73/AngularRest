'use strict';

describe('Controller: PersonController avec une personne défini', function () {

  // load the controller's module
  beforeEach(module('angularRestApp', function($translateProvider){
    $translateProvider.translations('fr_FR',{});
  }));

  var PersonController, scope, mockBackend, WCF_URL_BASE;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$httpBackend_, Person, _WCF_URL_BASE_) {

    mockBackend = TestHttp.helpers.initHttpBackend(_$httpBackend_);
    scope = $rootScope.$new();
    WCF_URL_BASE = _WCF_URL_BASE_;

    PersonController = $controller('PersonController', {
      $scope: scope,
      $routeParams:{id:'13'},
      person:Person
    });
  }));

  it("vérifier le nom d'une personne existante", function () {

    mockBackend.expectGET(WCF_URL_BASE+'/Persons/13/');
    mockBackend.flush();
    expect(scope.person.FirstName).toBe('Janice');
  });
});

describe('Controller: PersonController avec une personne indéfini', function () {

  // load the controller's module
  beforeEach(module('angularRestApp', function($translateProvider){
    $translateProvider.translations('fr_FR',{});
  }));

  var PersonController, scope, mockBackend, WCF_URL_BASE;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$httpBackend_, Person, _WCF_URL_BASE_) {

    WCF_URL_BASE =_WCF_URL_BASE_;
    mockBackend = _$httpBackend_;
    scope = $rootScope.$new();

    PersonController = $controller('PersonController', {
      $scope: scope,
      $routeParams:{id:'12343354'},
      personHandler : mockBackend.whenGET(WCF_URL_BASE+'/Persons/12343354/').respond({}),
      person:Person,
    });
  }));

  it('réponse à un Id de personne innexistante', function () {
    mockBackend.expectGET(WCF_URL_BASE+'/Persons/12343354/');
    mockBackend.flush();
    expect(scope.person.FirstName).toBeUndefined();
  });

});
