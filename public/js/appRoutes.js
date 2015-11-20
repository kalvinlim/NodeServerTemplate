angular.module('appRoutes', [])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider

			// home page
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'controllers'
			})


		$locationProvider.html5Mode(true);

	}]);