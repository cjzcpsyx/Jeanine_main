app.directive('headerView', function() {
	return {
		restrict: 'E',
		templateUrl: 'view/header.html',
		controller: function($scope, $location) {
			$scope.isActive = function(viewLocation) {
				return viewLocation == $location.path();
			}
			$scope.hideHeader = function() {
				$('#navbar-header-collapse').collapse('hide');			}
		}
	};
});