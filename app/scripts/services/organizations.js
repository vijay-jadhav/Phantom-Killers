'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.organizations
 * @description
 * # organizations
 * Service in the dashboardApp.
 */
angular.module('dashboardApp')
  .service('organizationsService', function () {
        var organizations = [
            {name: 'Synerzip', chart: 'area-chart.png', projects: ['Google','PDX', 'Halliburton'], owner: 'Vinayak'},
            {name: 'Starks', chart: 'area-chart.png', projects: ['Loven', 'Halliburton'], owner: 'Mukund'},
            {name: 'Lanisters', chart: 'area-chart.png', projects: ['LRS','Zimbra', 'Mercatus'], owner: 'Ashutosh'},
            {name: 'Targareyen', chart: 'area-chart.png', projects: ['CMS','Studer'], owner: 'Preshit'},
            {name: 'Baratheon', chart: 'area-chart.png', projects: ['PDX'], owner: 'Anil Nerurkar'},
            {name: 'Tryrell', chart: 'area-chart.png', projects: ['CloudOn','Prezi'], owner: 'Amit Bakore'}
        ];
        this.currOrgId;
    // AngularJS will instantiate a singleton by calling "new" on this function
        this.getAllOrganizations = function () {
            return organizations;
        };

        this.getOrganization = function (orgId) {
            var len = organizations.length;
            for (var idx = 0; idx < len; idx++) {
                if (organizations[idx].name === orgId) {
                    return organizations[idx];
                }
            }
            return {};
        };

        this.getCurrentOrganization = function () {
            return getOrganization(this.currOrgId);
        };

        this.setCurrentOrganization = function (orgId) {
            this.currOrgId = orgId;
        };

  });
