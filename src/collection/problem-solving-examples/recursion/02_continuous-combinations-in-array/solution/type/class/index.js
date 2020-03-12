'use strict';

(function() {

	var main = require('../../main').solution;

	class continuousCombinations {
		constructor(inputArr, combinationOf) {
			this.inputArr = inputArr;
			this.combinationOf = combinationOf;
		}
	}

	Object.setPrototypeOf(continuousCombinations.prototype, main);

	var publicAPI = {
		continuousCombinations
	};

	module.exports = publicAPI;
	
})();
