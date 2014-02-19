'use strict';

/* Services */

angular.module('myApp.services', [])
  
  .factory('ExpertSrv', ['$http', function ($http) {
    
    var url = 'http://dev.columby.com/api/v1/expert/';
    
    return {

      index: function(params){
        //console.log(params);
        if (!params) {
          params={page:0};
        }
        var promise = $http({
          method: 'GET',
          url: url,
          /*
          params:{
            page: params.page,
            limit: params.limit,
            uid: params.uid,
          }
          */
        }).then(function(response){
          console.log(response.data);
          return response.data.data;
        });
        return promise;
      },

      retrieve: function(params){
        var promise = $http({
          method:'GET',
          url:url+params.uuid,
        }).then(function(response){
          console.log(response.data);
          return response.data.data;
        });
        return promise;
      }
    };
  }]);
