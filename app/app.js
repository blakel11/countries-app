/**
*  Module
*
* Description
*/
angular.module('countryApp', ['countryAppViews', 'ngRoute', 'ngAnimate'])
	.config(['$locationProvider', '$routeProvider',function($locationProvider,$routeProvider) {
	  $locationProvider.hashPrefix('!');
	  $routeProvider.otherwise({
	    redirectTo: '/'
	  });
	}]);