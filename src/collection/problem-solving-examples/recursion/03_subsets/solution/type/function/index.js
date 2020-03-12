'use strict';

(function() {

	var main = require('../../main').solution;

	function subsets(inputArr, combinationOf) {
		this.inputArr = inputArr;
		this.combinationOf = combinationOf;
	}

	subsets.prototype = Object.create(main);

	var publicAPI = {
		subsets
	};

	module.exports = publicAPI;
	
})();
