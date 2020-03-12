'use strict';

(function() {

	var main = require('../../main').solution;

	class Combination {
		constructor(inputArr, combinationOf) {
			this.inputArr = inputArr;
			this.combinationOf = combinationOf;
		}
	}

	Object.setPrototypeOf(Combination.prototype, main);

	var publicAPI = {
		Combination
	};

	module.exports = publicAPI;
	
})();
