'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ExpertsIndexCtrl', ['$scope', function($scope) {

    $scope.experts = [
      {
        uid: 1,
        name: "Jan de geoPro",
        skills: 'gis, esri, arcgis',
      }, 
      {
        uid: 2,
        name: 'Piet de IATI type', 
        skills: 'iati, xml, oipa',
      }  
    ];

  }])
  .controller('ExpertsViewCtrl', ['$scope', function($scope) {

    $scope.expert = {
      uid: 1,
      name: "Jan de geoPro",
      skills: 'gis, esri, arcgis',
    }
  }]);