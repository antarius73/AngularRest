'use strict';

describe('Controller: PersonsController', function () {

  // load the controller's module
  beforeEach(module('angularRestApp', function ($translateProvider) {
    $translateProvider.translations('fr_FR', {});
  }));

  var createController,
    $rootScope,
    $scope,
    $httpBackend,
    dtOptionsBuilder,
    dtColumnDefBuilder;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, Persons, Person) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend = TestHttp.helpers.initHttpBackend($httpBackend);

    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();

    dtOptionsBuilder = {
      newOptions: function () {
        return {
          withLanguageSource: function () {
          }
        };
      },
    };
    dtColumnDefBuilder = {
      newColumnDef: function (i) {
      }
    };



    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('PersonsController', {
        '$scope': $scope,
        'DTOptionsBuilder': dtOptionsBuilder,
        'DTColumnDefBuilder': dtColumnDefBuilder,
        $rootScope: $rootScope,
        Persons: Persons,
        Person: Person
      })
    };
  }));

  //afterEach(function() {
  //  $httpBackend.verifyNoOutstandingExpectation();
  //  $httpBackend.verifyNoOutstandingRequest();
  //});

  it('Should be defined', function () {
    var controller = createController();
    expect(controller).toBeDefined();
    expect($scope.searchData).toBeDefined();
  });

  it('Should fetch all persons', function () {
    var controller = createController();
    $scope.searchData();
    $httpBackend.flush();

    expect($scope.persons).toEqual(jasmine.any(Array));
    expect($scope.persons.length).toBe(19);
    expect(angular.equals($scope.persons[0], {
      "FirstName": "Gigi",
      "Id": 2,
      "LastName": "Lopez",
      "ModifiedDateString": "2002-02-23T00:00:00.0000000",
      "Title": null,
      "TypeString": "VC"
    })).toBeTruthy();
  });

});
