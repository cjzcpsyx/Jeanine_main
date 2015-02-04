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
});