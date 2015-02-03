'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationeditCtrl
 * @description
 * # OrganizationeditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationeditCtrl', function ($scope, $stateParams, organizationsService) {
        $scope.organization = organizationsService.getOrganization($stateParams.orgId);
        console.log ($scope.organization.name);
  });
