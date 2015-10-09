'use strict';

angular.module('basejumpsTemplateApp')
  .directive('newdirective', function () {
    return {
      templateUrl: 'app/newdirective/newdirective.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        var test = scope;
        test = element;
        test = attrs;
      }
    };
  });
