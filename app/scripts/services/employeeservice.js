'use strict';



angular.module('anguarRestApp')


.factory('Employee',['$resource',
function($resource){
 return $resource('http://svr-grind.tesfri.intra/ServiceWcfApp.svc/Person/GetDetail/:id',
   {id:'@id'}
   //,
   //{
   //  getDetail: {
   //    method: 'GET',
   //    params: {id: '@id'},
   //    isArray: false
   //  }
   //}
  );
}

])


.factory('AllEmployees',['$resource',
  function($resource){
    return $resource('http://svr-grind.tesfri.intra/ServiceWcfApp.svc/Person/ListAll/');
  }

]);
