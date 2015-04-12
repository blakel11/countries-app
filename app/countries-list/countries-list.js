viewsMod.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/countries', {
		templateUrl: './countries-list/countries-list.html',
		controller: 'CountriesCtrl'
	});
}]);

viewsMod.controller('CountriesCtrl', ['$scope', 'requestCountries', '$location', function($scope, requestCountries, $location){
	requestCountries().success(function(data){
		console.log(data);
		$scope.countries = data.geonames;
	}).error(function(data){
		console.log(data);
	});

	$scope.countryLink = function(country){
		$location.path('/countries/' + country);
		console.log(country);
	};
}]);


viewsMod.factory('requestCountries', ['$http', function($http){
	return function(){

		var url = 'http://api.geonames.org/countryInfoJSON?';
		var request = {
			username : 'bball4life337',
			callback: 'JSON_CALLBACK'
		};

		return $http({
			method : 'JSONP',
			url : url,
			params : request
		});
	};
}]);