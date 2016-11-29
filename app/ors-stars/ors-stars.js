(function() {
	'use strict';

	var app = angular.module('ors-stars', []);

	app.component('orsStars', {
		bindings: {
			n: '=note'
		},
		controller: ['$scope', '$element', '$attrs', '$compile', function($scope, $element, $attrs, $compile) {
			console.log('orsStars controller', arguments);
			this.update = function(note) {
				console.log('update', arguments);
				this.n = note;
			};
			if ($attrs.note === undefined) {
				return;
			}
			$scope.$watch('$ctrl.n', function() {
				var note = $scope.$ctrl.n;
				note = Number(note);
				note = (isNaN(note)) ? 4 : note; 
				note = (note > 5) ? 5 : note;
				note = (note < 0) ? 0 : note;
				var html = '';
				for (var i = 0; i < note; i++) {
					html += '<img ng-click="$ctrl.update('+i+')" src="ors-stars/img/yellow_star.png" />';
				}
				for (var i = note; i < 5; i++) {
					html += '<img ng-click="$ctrl.update('+(i+1)+')" src="ors-stars/img/white_star.png" />';
				}				
				$element.html(html);
				$compile($element.contents())($scope);
			});
		}]
	});
})();
