'use strict';

describe('Controller: PersonController avec une personne défini', function () {

  // load the controller's module
  beforeEach(module('angularRestApp', function($translateProvider){
    $translateProvider.translations('fr_FR',{});
  }));

  var CreatePersonInfosController,
    scope,
    httpBackend,
    WcfMock,
    rootScope,
    controllerService,
    PersonServiceResource,
    WCF_URL_BASE;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {

    httpBackend = $injector.get('$httpBackend');
    httpBackend = TestHttp.helpers.initHttpBackend(httpBackend);
    rootScope = $injector.get('$rootScope');
    controllerService = $injector.get('$controller');
    PersonServiceResource = $injector.get('Person');
    WcfMock = $injector.get('WCF_URL_BASE');

    scope = rootScope.$new();

    CreatePersonInfosController = function () {
      return controllerService('PersonController', {
        $scope: scope,
        $routeParams:{id:'13'},
        person:PersonServiceResource
      })
    };
  }));

  it("vérifier le nom d'une personne existante", function () {
    CreatePersonInfosController();
    httpBackend.expectGET(WcfMock+'/Persons/13/');
    httpBackend.flush();
    expect(scope.person.FirstName).toBe('Janice');
  });
});

describe('Controller: PersonController avec une personne indéfini', function () {

  // load the controller's module
  beforeEach(module('angularRestApp', function($translateProvider){
    $translateProvider.translations('fr_FR',{});
  }));

  var CreatePersonInfosController,
    scope,
    httpBackend,
    WcfMock,
    rootScope,
    controllerService,
    PersonServiceResource,
    WCF_URL_BASE;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {

    httpBackend = $injector.get('$httpBackend');
    httpBackend = TestHttp.helpers.initHttpBackend(httpBackend);
    rootScope = $injector.get('$rootScope');
    controllerService = $injector.get('$controller');
    PersonServiceResource = $injector.get('Person');
    WcfMock = $injector.get('WCF_URL_BASE');

    scope = rootScope.$new();

    CreatePersonInfosController = function () {
      return controllerService('PersonController', {
        $scope: scope,
        $routeParams:{id:'12343354'},
        personHandler : httpBackend.whenGET(WcfMock+'/Persons/12343354/').respond({}),
        person:PersonServiceResource,
      })
    };
  }));

  it('réponse à un Id de personne innexistante', function () {
    CreatePersonInfosController();
    httpBackend.expectGET(WcfMock+'/Persons/12343354/');
    httpBackend.flush();
    expect(scope.person.FirstName).toBeUndefined();
  });

});
