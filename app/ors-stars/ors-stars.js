(function() {
	'use strict';
	

	var app = angular.module('ors-stars', []);

	app.directive('orsStars', function() {
		return {
			restrict: 'EAC',
			link: function(scope, element, attrs) {
				console.log('orsStars link', arguments);
				var html = '';
				for (var i = 0; i < 3; i++) {
					html += '<img src="ors-stars/img/yellow_star.png" />';
				}
				for (var i = 3; i < 5; i++) {
					html += '<img src="ors-stars/img/white_star.png" />';
				}				
				element.html(html);
			}
		};
	});
	
})();
