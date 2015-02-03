'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectviewCtrl
 * @description
 * # ProjectviewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectviewCtrl', function ($scope, $stateParams, projectsService) {
        console.log ($stateParams.projId);
        $scope.project = projectsService.getProject($stateParams.projId);
        console.log ($scope.project.name);
  });
