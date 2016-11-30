(function() {
	'use strict';
	

	var app = angular.module('mainApp', ['ors-stars', 'ors-route', 'jlg-spinner']);

	
	app.config(['$compileProvider', function ($compileProvider) {
		$compileProvider.debugInfoEnabled(false);
	}]);
	
	app.directive('orsHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-header.html',
			transclude: true
		};
	});
	
	app.directive('orsFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-footer.html',
			transclude: true
		};
	});
	
})();
