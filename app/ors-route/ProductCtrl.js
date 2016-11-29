(function() {
	'use strict';

	var app = angular.module('ors-route');

	
	app.controller('ProductCtrl', ['$scope', '$injector', function ProductCtrl($scope, $injector) {
		console.log('ProductCtrl', arguments);
		var $http = $injector.get('$http');
		var $q = $injector.get('$q');
		
		this.start = function() {
			console.log('start', arguments);
			$http.get('/ws/s1').then(function(response) {
				console.log('s1', response);
				return $q.all([$http.get('/ws/s2'), $http.get('/ws/s3'), $http.get('/ws/s4')]);
			}).then(function(responses) {
				console.log('s234', responses);
				return $http.get('/ws/s5');
			}).then(function(response) {
				console.log('s5', response);
			}).catch(function(error) {
				console.error('error', error);
			});
		};
	}]);
})();
