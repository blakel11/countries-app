var viewsMod = angular.module('countryAppViews', ['ngRoute'])
	.constant('USERNAME', 'bball4life337')
	.constant('BASE_URL', 'http://api.geonames.org/')
  .run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$routeChangeError', function() {
        $location.path("/error");
    });
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.isLoading = false;
      }, 2000);
    });
});