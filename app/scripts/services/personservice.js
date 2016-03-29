'use strict';

angular.module('angularRestApp')

  .factory('Person', ['$resource',
    function ($resource) {
      return $resource('https://svr-grind.tesfri.intra:8081/Persons/:id/', {id: '@id'});
    }

  ])

  .factory('Persons', ['$resource',
    function ($resource) {
      return $resource('https://svr-grind.tesfri.intra:8081/Persons/');
    }

  ]);
