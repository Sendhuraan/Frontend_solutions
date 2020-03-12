'use strict';

(function() {

	var inputArray = [2,2,3,4];
	var combinationOf = 3;

	var Solution_byFunction = require('./solution').usingFunction.Combination;
	var combination_byFunction = new Solution_byFunction(inputArray, combinationOf);

	console.log(combination_byFunction.using_recursion(inputArray, combinationOf));
	
})();
