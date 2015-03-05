viewsMod.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: './intro/intro.html',
		controller: 'IntroCtrl'
	});
}]);

viewsMod.controller('IntroCtrl', ['$scope', function($scope){
	
}]);