viewsMod.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/countries/:country', {
		templateUrl: './country-detail/country-detail.html',
		controller: 'DetailCtrl',
		resolve: {
			
		}
	});
}]);

viewsMod.controller('DetailCtrl', ['$scope', 'RequestCountry', '$routeParams', function($scope, RequestCountry, $routeParams){
	var country = $routeParams.country;
	RequestCountry.getCountry(country).success(function(data){
		console.log(data.geonames[0]);
		$scope.country = data.geonames[0];
		var capital = data.geonames[0].capital;

		RequestCountry.capitalPop(country, capital).success(function(data){
		$scope.capitalPop = data.geonames[0].population;
		console.log($scope.capitalPop);
	}).error(function(data){
		console.log(data);
		});
	}).error(function(data){
		console.log(data);
	});
	
	RequestCountry.neighbors(country).success(function(data){
		$scope.neighbors = data.geonames;
    $scope.numbers = data.geonames.length;
    //console.log($scope.numbers);
		//console.log(data);
	}).error(function(data) {
		console.log(data);
	});
}]);

viewsMod.factory('RequestCountry', ['$http', 'BASE_URL', 'USERNAME', function($http, BASE_URL, USERNAME){
	return {
		makeRequest : function(url, params){
			var url = BASE_URL + '/' + url;
			return $http({
				method: 'JSONP',
				url: url,
				params : params,
				cache : true
			})},
		getCountry : function(countryCode){
			return this.makeRequest('countryInfoJSON?', {
				username : USERNAME,
				callback : 'JSON_CALLBACK',
				country : countryCode
			});
		},
		capitalPop : function(countryCode, capital){
			return this.makeRequest('search?', {
				q : capital ,
				username : USERNAME,
				callback : 'JSON_CALLBACK',
				country : countryCode,
				type : 'json',
				isNameRequired : true,
				name_equals : capital
			});
		},
		neighbors : function(countryCode){
			return this.makeRequest('neighboursJSON?', {
				username : USERNAME,
				country : countryCode,
				callback: 'JSON_CALLBACK'					
			})
		}
	};
}]);
