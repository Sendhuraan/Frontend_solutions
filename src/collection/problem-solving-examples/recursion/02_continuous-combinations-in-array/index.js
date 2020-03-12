'use strict';

(function() {

	var { getSolution } = require('./utilities');

	var inputArray = [1,2,3,4,5];

	var continuousCombinations = getSolution('index', inputArray);
	console.log(continuousCombinations.using_recursion());
	console.log(continuousCombinations.using_iteration());
	
})();
