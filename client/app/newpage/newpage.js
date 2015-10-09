'use strict';

angular.module('basejumpsTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newpage', {
        templateUrl: 'app/newpage/newpage.html',
        controller: 'NewpageCtrl'
      });
  });
