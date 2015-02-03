var app = angular.module('jeanine-main', ['ngRoute']);
app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'partials/home.html'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);
app.directive('headerView', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/header.html',
		controller: function($scope, $location) {
			$scope.isActive = function(viewLocation) {
				return viewLocation == $location.path();
			}
		}
	};
})
