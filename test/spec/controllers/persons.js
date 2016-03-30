'use strict';

describe('Controller: PersonsController', function () {

  // load the controller's module
  beforeEach(module('angularRestApp'));

  var createController,
    $rootScope,
    $scope,
    $httpBackend,
    dtOptionsBuilder,
    dtColumnDefBuilder,
    authRequestHandler;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, Persons, Person) {
    $httpBackend = $injector.get('$httpBackend');

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

    authRequestHandler = $httpBackend.when('GET', '/Persons/').respond([
      {
        "FirstName": "Ken6",
        "Id": 1,
        "LastName": "34940e33-b2df-42d6-9ecb-2717cecd0bc2",
        "ModifiedDateString": "2016-03-15T11:44:33.1370000",
        "Title": null,
        "TypeString": "SC"
      },
      {
        "FirstName": "Gigi46",
        "Id": 2,
        "LastName": "dsfsdfsf3",
        "ModifiedDateString": "2002-02-23T00:00:00.0000000",
        "Title": null,
        "TypeString": "VC"
      },
      {
        "FirstName": "Robert1",
        "Id": 3,
        "LastName": "Tamburello",
        "ModifiedDateString": "2015-07-18T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Rob",
        "Id": 4,
        "LastName": "Walters",
        "ModifiedDateString": "2001-12-29T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Gail",
        "Id": 5,
        "LastName": "Erickson",
        "ModifiedDateString": "2002-01-30T00:00:00.0000000",
        "Title": "Ms.",
        "TypeString": "EM"
      },
      {
        "FirstName": "Jossef",
        "Id": 6,
        "LastName": "Goldberg",
        "ModifiedDateString": "2002-02-17T00:00:00.0000000",
        "Title": "Mr.",
        "TypeString": "EM"
      },
      {
        "FirstName": "Dylan",
        "Id": 7,
        "LastName": "Miller",
        "ModifiedDateString": "2003-03-05T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Diane",
        "Id": 8,
        "LastName": "Margheim",
        "ModifiedDateString": "2003-01-23T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Gigi",
        "Id": 9,
        "LastName": "Matthew",
        "ModifiedDateString": "2003-02-10T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Michael",
        "Id": 10,
        "LastName": "Raheem",
        "ModifiedDateString": "2003-05-28T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Ovidiu",
        "Id": 11,
        "LastName": "Cracium",
        "ModifiedDateString": "2004-12-29T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Thierry",
        "Id": 12,
        "LastName": "D'Hers",
        "ModifiedDateString": "2002-01-04T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Janice",
        "Id": 13,
        "LastName": "Galvin",
        "ModifiedDateString": "2005-01-16T00:00:00.0000000",
        "Title": "Ms.",
        "TypeString": "EM"
      },
      {
        "FirstName": "Michael",
        "Id": 14,
        "LastName": "Sullivan",
        "ModifiedDateString": "2005-01-23T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Sharon",
        "Id": 15,
        "LastName": "Salavaria",
        "ModifiedDateString": "2005-02-11T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "David",
        "Id": 16,
        "LastName": "Bradley",
        "ModifiedDateString": "2002-01-13T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Kevin",
        "Id": 17,
        "LastName": "Brown",
        "ModifiedDateString": "2001-02-19T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "John",
        "Id": 18,
        "LastName": "Wood",
        "ModifiedDateString": "2005-03-03T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Mary",
        "Id": 19,
        "LastName": "Dempsey",
        "ModifiedDateString": "2005-03-10T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      },
      {
        "FirstName": "Wanida",
        "Id": 20,
        "LastName": "Benshoof",
        "ModifiedDateString": "2005-01-31T00:00:00.0000000",
        "Title": null,
        "TypeString": "EM"
      }]);

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
  //
  //afterEach(function() {
  //  $httpBackend.verifyNoOutstandingExpectation();
  //  $httpBackend.verifyNoOutstandingRequest();
  //});

  it('Should be defined', function () {
    var controller = createController();
    expect(controller).toBeDefined();
  });

  it('Should fetch all persons', function(){
    //$httpBackend.expectGET('/Persons/');
    //var controller = createController();
    //$httpBackend.flush();
    //
    //expect($scope.persons).toEqual(jasmine.any(Array));
    //expect($scope.persons.length).toBe(20);
    //expect(angular.equals($scope.persons[1],{"FirstName":"Gigi46","Id":2,"LastName":"dsfsdfsf3","ModifiedDateString":"2002-02-23T00:00:00.0000000","Title":null,"TypeString":"VC"})).toBeTruthy();
  });

});
