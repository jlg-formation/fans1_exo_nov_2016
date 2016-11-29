(function() {
	'use strict';
	

	var app = angular.module('ors-stars', []);

	app.directive('orsStars', function() {
		return {
			restrict: 'EAC',
			link: function(scope, element, attrs) {
				console.log('orsStars link', arguments);
				scope.$watch('myNote', function() {
					var note;
					if (scope[attrs.note] != undefined) {
						note = scope[attrs.note];
					} else {
						note = (attrs.note === undefined) ? 4 : attrs.note;
					}
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
