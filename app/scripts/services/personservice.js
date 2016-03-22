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


  .factory('Persons', ['$resource','$cacheFactory',
    function ($resource,$cacheFactory) {
      var personsCache = $cacheFactory('persons')
      return $resource('http://svr-grind.tesfri.intra:8080/Persons/',
        {},
        {
          'query': { method:'GET', cache: personsCache, isArray:true }

        }
      );
    }

  ]);
