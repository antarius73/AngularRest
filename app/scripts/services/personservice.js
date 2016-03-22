'use strict';

angular.module('angularRestApp')


  .factory('Person', ['$resource', '$cacheFactory',

    function ($resource, $cacheFactory) {
      // supprimer le cache de la liste des personne si une personne est modifiée
      var personsCache = $cacheFactory.get('persons');

      var interceptor = {
        response: function (response) {
          if(typeof personsCache != 'undefined' )
          personsCache.removeAll();

          return response;
        }
      };

      return $resource('http://svr-grind.tesfri.intra:8080/Persons/:id/', {id: '@id'},

        {
          'update': {method: 'PUT', interceptor: interceptor}
        }
      );
    }
  ])


  .factory('Persons', ['$resource', '$cacheFactory',
    function ($resource, $cacheFactory) {
      var personsCache = $cacheFactory('persons');


      return $resource('http://svr-grind.tesfri.intra:8080/Persons/',
        {},
        {
          'query': {method: 'GET', cache: personsCache, isArray: true}


        }
      );
    }

  ]);
