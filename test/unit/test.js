(function() {
	'use strict';

	describe('test', function() {
		describe('clone', function() {
			it('should duplicate the object', function() {
				var a = {
					x: 2,
					y: { z: 4 }
				};
				var b = clone(a);
				
				expect(a.y.z).toEqual(b.y.z);
	
				b.y.z = 5;

				expect(a.y.z).not.toEqual(b.y.z);
			});
		});
		
		describe('product start ', function() {
			beforeEach(module('ors-route'));
			
			var $controller;
			var $rootScope;
			var $scope;
			var ctrl;
			var $http;
			
			beforeEach(inject(function($injector) {
				$controller = $injector.get('$controller');
				$rootScope = $injector.get('$rootScope');
				$scope = $rootScope.$new();
				ctrl = $controller('ProductCtrl', {$scope: $scope });
				$http = $injector.get('$httpBackend');
				
				$http.when('GET', /^\/ws\/s[12345]/).respond({});
			}));



			it('should set the state to ok', function() {
				ctrl.start();
				console.log('state', ctrl.state);
				$http.flush(1);
				console.log('state', ctrl.state);
				$http.flush(1);
				console.log('state', ctrl.state);
				$http.flush(1);
				console.log('state', ctrl.state);
				$http.flush(1);
				console.log('state', ctrl.state);
				$http.flush(1);
				console.log('state', ctrl.state);
				expect(ctrl.state).toEqual('ok');
				
			});

		});
	});
})();

