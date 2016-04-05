'use strict';

describe('Controller: PersoncreateCtrl', function () {

  beforeEach(module('angularRestApp', function($translateProvider){
    $translateProvider.translations('fr_FR',{});
  }));

  var createController,
    rootScope,
    scope,
    httpBackend,
    personType,
    filter,
    WcfMock,
    PersonServiceResource,
    controllerService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {

    httpBackend = $injector.get('$httpBackend');
    httpBackend = TestHttp.helpers.initHttpBackend(httpBackend);
    rootScope = $injector.get('$rootScope');
    WcfMock = $injector.get('WCF_URL_BASE');
    personType = $injector.get('PERSON_TYPE');
    PersonServiceResource = $injector.get('Person');

    filter = $injector.get('$filter');
    scope = rootScope.$new();

    controllerService = $injector.get('$controller');

    createController = function () {
      return controllerService('PersoncreateCtrl', {
        $scope: scope,
        Person: PersonServiceResource
      })
    };
  }));

  it("verifier l'initialisation des données de format pour le formulaire" , function () {
    createController();
    scope.initUiData();
    expect(scope.UiDateformat).toBe("dd/MM/yyyy");
    expect(scope.restServiceDateFormat).toBe("MM/dd/yyyy");
    expect(scope.isDatePickerOpen).toBeFalsy();
    expect(scope.showErrorsCheckValidity).toBeFalsy(false);
    expect(scope.AviableTypes).toBe(personType);

  });

  it("verifier l'initialisation par défaut de la personne nouvelle" , function () {
    createController();
    scope.initUiData();
    scope.initPerson();
    expect(scope.person).toBeDefined();
    expect(filter('date')(scope.person.modifiedDateUI,"MM/dd/yyyy")).toBe(filter('date')(new Date(),"MM/dd/yyyy"));
    expect(scope.person.TypeString).toBe("SC");
  });

  it("verifier la demande d'ouverture de la popup de date" , function () {
    createController();
    scope.initUiData();
    scope.initPerson();
    scope.openDatePicker();
    expect(scope.isDatePickerOpen).toBeTruthy(true);
  });

  it("verifier les modiications ayant lieu juste avant la demande de création" , function () {
    createController();
    scope.initUiData();
    scope.initPerson();

    scope.update(scope.person);
    // une demande de validation du formulaire doit être faite
    expect(scope.showErrorsCheckValidity).toBeTruthy();
    // la date doit convertie au format du WCF
    expect(scope.person.ModifiedDateString).toBe(filter('date')(scope.person.modifiedDateUI,"MM/dd/yyyy"));

  });

  it("retour normal apres une demande creation" , function () {
    createController();
    scope.initUiData();
    scope.initPerson();

    scope.update(scope.person);

    httpBackend.expectPOST(WcfMock+'/Persons/');
    // verifier le retour
    httpBackend.flush();


  });

});
