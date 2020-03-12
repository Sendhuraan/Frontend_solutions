'use strict';

(function() {

	var Utils = require('./utilities');

	function using_recursion(inputArr = [...this.inputArr]) {

		var results = [];

		function getCombinations(arr, number) {

			let result = [...arr];

			if(arr.length === number) {
				results.push(arr);
			}
			else {
				results.push(result.slice(0, number));
				getCombinations(arr.slice(1), number);
			}
		}

		for(let numberOfCombinations=1; numberOfCombinations <= inputArr.length; numberOfCombinations++) {
			getCombinations(inputArr, numberOfCombinations);
		}

		return results;
	}

	function using_iteration(inputArr = [...this.inputArr]) {

		var results = [];

		function getCombinations(arr, number) {
			
			for(var anchor=0; anchor <= arr.length-number; anchor++) {
				
				var result = [];
				for(var length=anchor; length < anchor+number; length++) {
					result.push(arr[length]);
				}

				results.push(result);
			}
		}

		for(let numberOfCombinations=1; numberOfCombinations <= inputArr.length; numberOfCombinations++) {
			getCombinations(inputArr, numberOfCombinations);
		}

		return results;
	}

	const index = using_recursion;

	var solution = Object.create(Utils);

	solution.using_recursion = using_recursion;
	solution.using_iteration = using_iteration;
	solution.index = index;

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
