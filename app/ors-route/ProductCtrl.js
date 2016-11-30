(function() {
	'use strict';

	var app = angular.module('ors-route');

	
	app.controller('ProductCtrl', ['$scope', '$injector', function ProductCtrl($scope, $injector) {
		var $log = $injector.get('$log');
		$log.debug('ProductCtrl', arguments);
		var $http = $injector.get('$http');
		var $q = $injector.get('$q');
		var $ctrl = this;
		
		this.state = undefined;
		
		this.start = function() {
			$log.debug('start', arguments);
			this.state = 'processing...';
			$http.get('/ws/s1').then(function(response) {
				$log.debug('s1', response);
				$ctrl.state = 'processing...1';
				return $q.all([$http.get('/ws/s2'), $http.get('/ws/s3'), $http.get('/ws/s4')]);
			}).then(function(responses) {
				$log.debug('s234', responses);
				$ctrl.state = 'processing...2';
				return $http.get('/ws/s5');
			}).then(function(response) {
				$log.debug('s5', response);
				$ctrl.state = 'ok';
			}).catch(function(error) {
				console.error('error', error);
				$ctrl.state = 'ko';
			});
		};
	}]);
})();
