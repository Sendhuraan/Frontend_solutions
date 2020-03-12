'use strict';

(function() {

	var Utils = require('./utilities');

	function using_recursion(inputArr, combinationOf) {

		var results = [];
		var anchorArr = [];
		var remainingSubsetArr = [];

		function getCombination(anchor, remainingSubset) {
			
			remainingSubset.map(function(value, key) {
				let result = [...anchor];
				result.push(value);
				
				if(result.length === combinationOf) {
					results.push(result);
				}
				else {
					getCombination(result, remainingSubset.slice(key+1));
				}
				
			});
		}

		for(let arrIndex = 0; arrIndex <= inputArr.length - combinationOf; arrIndex++) {
			anchorArr.push(inputArr[arrIndex]);
			remainingSubsetArr = inputArr.slice(arrIndex + 1);
			getCombination(anchorArr, remainingSubsetArr);
			anchorArr.pop();
		}

		return results;
		
	}

	const index = using_recursion;

	var solution = Object.create(Utils);

	solution.using_recursion = using_recursion;
	solution.index = index;

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
