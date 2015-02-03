'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('DashboardCtrl', function ($scope, dashboardService) {

    var weeklyStats = dashboardService.getWeeklyStats();
    var dailyStats = dashboardService.getDailyStats();
    $scope.projects = dashboardService.getProjects();
    $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    $scope.series = ['Billable', 'Bench'];
    $scope.weeklyStats = [
      weeklyStats.billable,
      weeklyStats.bench
    ];
    $scope.dailyStats = [dailyStats.billable, dailyStats.bench];

  });
