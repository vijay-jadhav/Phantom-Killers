'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationviewCtrl
 * @description
 * # OrganizationviewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationviewCtrl', function ($scope, $stateParams, organizationsService) {
        console.log ($stateParams.orgId);
        $scope.organization = organizationsService.getOrganization($stateParams.orgId);
        console.log ($scope.organization.name);
  });
