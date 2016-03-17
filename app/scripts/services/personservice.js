'use strict';

angular.module('angularRestApp')

  .factory('Person', ['$resource',
    function ($resource) {
      return $resource('http://svr-grind.tesfri.intra:8080/Persons/:id/', {id: '@id'});
      //,
      //{
      //  getDetail: {
      //    method: 'GET',
      //    params: {id: '@id'},
      //    isArray: false
      //  }
      //}
    }

  ])


  .factory('Persons', ['$resource',
    function ($resource) {
      return $resource('http://svr-grind.tesfri.intra:8080/Persons/');
    }

  ]);
