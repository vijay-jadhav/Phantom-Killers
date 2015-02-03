'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjecteditCtrl
 * @description
 * # ProjecteditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjecteditCtrl', function ($scope, $stateParams, projectsService) {

        $scope.project = projectsService.getProject($stateParams.projId);
        console.log ($scope.project.name);
  });
