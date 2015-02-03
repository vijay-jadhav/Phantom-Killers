'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationlistCtrl
 * @description
 * # OrganizationlistCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationlistCtrl', function ($scope, $state, organizationsService) {

        $scope.organizations = organizationsService.getAllOrganizations();

        $scope.showOrganization = function (organization) {
            console.log ('AMOl', organization.name);
            //$state.transitionTo('organization.view', organization);
        };
  });
