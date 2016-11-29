(function() {
	'use strict';

	var app = angular.module('ors-route', ['ngRoute']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'ors-route/tmpl/home.html'
			})
			.when('/products', {
				templateUrl: 'ors-route/tmpl/products.html',
				controller: 'ProductCtrl',
				controllerAs: '$ctrl'
			})
			.when('/services', {
				templateUrl: 'ors-route/tmpl/services.html'
			})
			.when('/contact', {
				templateUrl: 'ors-route/tmpl/contact.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
	app.run(['$injector', function($injector) {
		var $rootScope = $injector.get('$rootScope');
		var $location = $injector.get('$location');
		
		$rootScope.goto = function(path) {
			console.log('goto', arguments);
			$location.path(path);
		};
		
		$rootScope.isActive = function(path) {
			return {active: $location.path() === path };
		};
		
		$rootScope.items = [{
			label: 'Accueil',
			path: '/'
		}, {
			label: 'Produits',
			path: '/products'
		}, {
			label: 'Services',
			path: '/services'
		}, {
			label: 'Contact',
			path: '/contact'
		}];
	}]);
})();
