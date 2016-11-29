(function() {
	'use strict';

	var app = angular.module('ors-route', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'ors-route/tmpl/home.html'
			})
			.when('/products', {
				templateUrl: 'ors-route/tmpl/products.html'
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
			console.log('isActive', arguments);
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
