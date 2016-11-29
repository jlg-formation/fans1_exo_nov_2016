(function() {
	'use strict';

	var app = angular.module('ors-stars', []);

	app.directive('orsStars', function() {
		return {
			restrict: 'EAC',
			scope: {
				n: '=note'
			},
			link: function(scope, element, attrs) {
				console.log('orsStars link', arguments);
				scope.$watch('n', function() {
					var note = (scope.n === undefined) ? 4 : scope.n;
					note = Number(note);
					note = (isNaN(note)) ? 4 : note; 
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					var html = '';
					for (var i = 0; i < note; i++) {
						html += '<img src="ors-stars/img/yellow_star.png" />';
					}
					for (var i = note; i < 5; i++) {
						html += '<img src="ors-stars/img/white_star.png" />';
					}				
					element.html(html);
				});
			}
		};
	});
})();
