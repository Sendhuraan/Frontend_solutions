'use strict';

(function() {

	var { getSolution } = require('./utilities');

	var input = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9,10,11,12],
		[13,14,15,16]
	];

	var spiralMatrix = getSolution('function', input);
	console.log(spiralMatrix.using_nextDirection());
	
})();
