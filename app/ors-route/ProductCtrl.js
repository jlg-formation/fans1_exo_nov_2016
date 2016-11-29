(function() {
	'use strict';

	var app = angular.module('ors-route');

	
	app.controller('ProductCtrl', ['$scope', '$injector', function ProductCtrl($scope, $injector) {
		console.log('ProductCtrl', arguments);
		var $http = $injector.get('$http');
		
		this.start = function() {
			console.log('start', arguments);
		};
	}]);
})();
