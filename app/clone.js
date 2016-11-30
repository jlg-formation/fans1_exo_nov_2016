(function() {
	'use strict';
	
	window.clone = function(o) {
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
	
	
	
	
})();
