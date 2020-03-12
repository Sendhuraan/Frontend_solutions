'use strict';

(function() {

	var main = require('../../main').solution;

	function continuousCombinations(inputArr, combinationOf) {
		this.inputArr = inputArr;
		this.combinationOf = combinationOf;
	}

	continuousCombinations.prototype = Object.create(main);

	var publicAPI = {
		continuousCombinations
	};

	module.exports = publicAPI;
	
})();
