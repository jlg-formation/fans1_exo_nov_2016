(function() {
	'use strict';
	
	var clone = function(o) {
		var result = {};
		for (var p in o) {
			if (o[p] !== null && typeof o[p] === 'object') {
				result[p] = clone(o[p]);
			} else {
				result[p] = o[p];
			}
		}
		return result;
	};
	
	var a = {
		x: 2,
		y: { z: 4 }
	};
	var b = clone(a);
	
	console.log('a.y.z', a.y.z);
	console.log('b.y.z', b.y.z);
	
	b.y.z = 5;
	
	console.log('a.y.z', a.y.z);
	console.log('b.y.z', b.y.z);
	
	
})();
