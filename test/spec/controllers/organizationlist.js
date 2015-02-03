'use strict';

describe('Controller: OrganizationlistCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var OrganizationlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationlistCtrl = $controller('OrganizationlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
