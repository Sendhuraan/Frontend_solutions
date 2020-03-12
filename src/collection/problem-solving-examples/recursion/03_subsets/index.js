'use strict';

(function() {

	var { getSolution } = require('./utilities');

	var inputArray = [1,2,3];

	var subsets = getSolution('index', inputArray);
	console.log(subsets.using_iteration());
	console.log(subsets.using_recursion_topDown());
	console.log(subsets.using_recursion_bottomUp());
	
})();
