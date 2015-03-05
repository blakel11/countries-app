viewsMod.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/countries/:country', {
		templateUrl: './country-detail/country-detail.html',
		controller: 'DetailCtrl'
	});
}]);

viewsMod.controller('DetailCtrl', ['$scope', function($scope){
		
	}]);