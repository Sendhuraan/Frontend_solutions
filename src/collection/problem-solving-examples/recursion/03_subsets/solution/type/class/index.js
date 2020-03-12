'use strict';

(function() {

	var main = require('../../main').solution;

	class subsets {
		constructor(inputArr, combinationOf) {
			this.inputArr = inputArr;
			this.combinationOf = combinationOf;
		}
	}

	Object.setPrototypeOf(subsets.prototype, main);

	var publicAPI = {
		subsets
	};

	module.exports = publicAPI;
	
})();
