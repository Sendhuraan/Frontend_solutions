'use strict';

(function() {

	var Utils = require('./utilities');

	function using_iteration(inputArr = [...this.inputArr]) {
		let results = [[]];
		
		inputArr.forEach(function(value) {
			const newSubsets = results.map(function(result) {
				return result.concat([value]);
			});

			results = results.concat(newSubsets);
		});
		
		return results;
	}

	function using_recursion_topDown(inputArr = [...this.inputArr]) {
		let results = [];
		this.topDown_helper(inputArr, 0, [], results);
		return results;
	}

	function using_recursion_bottomUp(inputArr = [...this.inputArr]) {
		let results = [];
		this.bottomUp_helper(inputArr, 0, [], results);
		return results;
	}


	const index = using_recursion_topDown;

	var solution = Object.create(Utils);

	solution.using_iteration = using_iteration;
	solution.using_recursion_bottomUp = using_recursion_bottomUp;
	solution.using_recursion_topDown = using_recursion_topDown;
	solution.index = index;

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
