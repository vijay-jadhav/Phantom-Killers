'use strict';

describe('Controller: OrganizationviewCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var OrganizationviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationviewCtrl = $controller('OrganizationviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
