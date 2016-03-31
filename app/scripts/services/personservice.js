'use strict';

angular.module('angularRestApp')


  .factory('Person', ['$resource', '$cacheFactory', 'WCF_URL_BASE',

    function ($resource, $cacheFactory, WCF_URL_BASE) {
      // supprimer le cache de la liste des personne si une personne est modifiée
      var personsCache = $cacheFactory.get('persons');

      var interceptor = {
        response: function (response) {
          if (typeof personsCache != 'undefined')
            personsCache.removeAll();

          return response;
        }
      };

      return $resource(WCF_URL_BASE + '/Persons/:id/', {id: '@id'},

        {
          'update': {method: 'PUT', interceptor: interceptor},
          'create': {method: 'POST', interceptor: interceptor},
          'remove': {method: 'DELETE'}
        }
      );
    }
  ])


  .factory('Persons', ['$resource', '$cacheFactory', 'WCF_URL_BASE',
    function ($resource, $cacheFactory, WCF_URL_BASE) {
      var personsCache = $cacheFactory('persons');


      return $resource(WCF_URL_BASE + '/Persons/',
        {},
        {
          'query': {method: 'GET', cache: personsCache, isArray: true}


        }
      );
    }

  ]);
