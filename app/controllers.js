'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ExpertsIndexCtrl', ['$scope', 'ExpertSrv', function($scope,ExpertSrv) {

    ExpertSrv.index().then(function(res){
      $scope.experts = res;
      console.log(res);
    });

  }])

  .controller('ExpertsViewCtrl', ['$scope', '$routeParams', '$sce', 'ExpertSrv', function($scope,$routeParams,$sce,ExpertSrv) {
    
    console.log($routeParams);

    var params = {uuid: $routeParams.uuid};
    ExpertSrv.retrieve(params).then(function(res){
      $scope.expert = res;
      //$scope.expert['expert-profile'].description = $sce.trustAsHtml($scope.expert['expert-profile'].description);

    });

  }]);