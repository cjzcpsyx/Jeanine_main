app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'view/home.html'
		})
		.when('/sign_in', {
			templateUrl: 'view/signIn.html'
		})
		.when('/sign_up', {
			templateUrl: 'view/signUp.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);