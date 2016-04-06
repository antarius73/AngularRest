'use strict';

describe('Controller: PersonsController', function () {

  //var modalInstance, modalCtrl;

  // load the controller's module
  beforeEach(module('angularRestApp', function ($translateProvider) {
    $translateProvider.translations('fr_FR', {});
  /*
    modalInstance = { close: function() {}, dismiss: function() {} };

    modalCtrl = $controller('ConfirmdeletepersonCtrl', {
      $scope: scope,
      $uibModalInstance: modalInstance
    });
*/
  }));

  var createController,
    rootScope,
    scope,
    httpBackend,
    PersonServiceResource,
    PersonsServiceResource,
    dtOptionsBuilder,
    dtColumnDefBuilder,
    WcfMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    httpBackend = $injector.get('$httpBackend');
    httpBackend = TestHttp.helpers.initHttpBackend(httpBackend);
    PersonServiceResource = $injector.get('Person');
    PersonsServiceResource = $injector.get('Persons');
    dtOptionsBuilder = $injector.get('DTOptionsBuilder');
    dtColumnDefBuilder = $injector.get('DTColumnDefBuilder');
    WcfMock = $injector.get('WCF_URL_BASE');

    rootScope = $injector.get('$rootScope');
    scope = rootScope.$new();

    var controllerService = $injector.get('$controller');


    createController = function () {
      return controllerService('PersonsController', {
        $scope: scope,
        DTOptionsBuilder: dtOptionsBuilder,
        DTColumnDefBuilder: dtColumnDefBuilder,
        $rootScope: rootScope,
        Persons: PersonsServiceResource,
        Person: PersonServiceResource,
      })
    };
  }));

  it('Verification de données a destination de la vue', function () {
    createController();
    expect(scope.persons).toBeDefined();
    expect(scope.dataLoaded).toBeFalsy();
    expect(scope.dataLoadedSpinner).toBeFalsy();
    expect(scope.showError).toBeFalsy();
  });

  it('Verification des paramètrages initiaux de la grille', function () {
    createController();
    rootScope.Userlanguage = "fr_FR";

    expect(scope.dtOptions).toBeDefined();
    expect(scope.dtColumnDefs).toBeDefined();
    expect(scope.dtColumnDefs.length).toBe(5);
    expect(scope.dtOptions.language.url).toBe("resources/datatable-fr_FR.json");
  });

  it('le controleur est défini', function () {
    var controller = createController();
    expect(controller).toBeDefined();
    expect(scope.searchData).toBeDefined();
  });

  it("Recupération de l'ensemble des personnes", function () {
    createController();
    scope.searchData();
    httpBackend.flush();

    expect(scope.persons).toEqual(jasmine.any(Array));
    expect(scope.persons.length).toBe(19);
    expect(angular.equals(scope.persons[0], {
      "FirstName": "Gigi",
      "Id": 2,
      "LastName": "Lopez",
      "ModifiedDateString": "2002-02-23T00:00:00.0000000",
      "Title": null,
      "TypeString": "VC"
    })).toBeTruthy();
  });

  it("modification des bool lié a la vue durant le chargment des données", function () {
    createController();
    scope.searchData();
    expect(scope.dataLoadedSpinner).toBeTruthy();
    httpBackend.flush();
    expect(scope.dataLoadedSpinner).toBeFalsy();
    expect(scope.dataLoaded).toBeTruthy();
    expect(rootScope.existingPersonnsData).toBeTruthy();
  });

  it("l'echec du chargment des données affiche le message d'erreur", function () {
    createController();
    scope.searchData();
    httpBackend.expectGET(WcfMock+'/Persons/').respond(401,'');
    httpBackend.flush();
    expect(scope.showError).toBeTruthy();
    expect(scope.dataLoadedSpinner).toBeFalsy();
    expect(scope.errorMessage).toBe("errorMessages.dataServerConnexionError");
  });

  it("passage des informations pour la suppression d'une personne", function () {
    createController();
    scope.deletePerson(5,4);
    expect(scope.delIndex).toBe(4);
    expect(scope.delRscId).toBe(5);
  });

  it("envoi de la demande de suppression vers la base", function () {
    createController();
    scope.searchData();
    httpBackend.flush();
    var nbPersons = scope.persons.length;
    scope.delIndex=4;
    scope.delRscId=5;
    scope.sendDeletingOrder();
    httpBackend.expectDELETE(WcfMock+'/Persons/'+scope.delRscId+"/");
    httpBackend.flush();
    // verifier la suppretion dans le tab de la vue
    expect(scope.persons.length).toBe(nbPersons-1);
  });
});
