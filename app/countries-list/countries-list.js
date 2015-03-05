viewsMod.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/countries', {
		templateUrl: './countries-list/countries-list.html',
		controller: 'CountriesCtrl'
	});
}]);

viewsMod.controller('CountriesCtrl', ['$scope', function($scope){
	
}]);