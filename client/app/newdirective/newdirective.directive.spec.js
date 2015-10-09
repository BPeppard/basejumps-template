'use strict';

describe('Directive: newdirective', function () {

  // load the directive's module and view
  beforeEach(module('basejumpsTemplateApp'));
  beforeEach(module('app/newdirective/newdirective.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<newdirective></newdirective>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the newdirective directive');
  }));
});