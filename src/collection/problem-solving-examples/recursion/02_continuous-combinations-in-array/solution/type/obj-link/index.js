'use strict';

(function() {

	var main = require('../../main').solution;

	var continuousCombinations = Object.create(main);

	continuousCombinations.init = function(inputArr, combinationOf) {
		this.inputArr = inputArr;
		this.combinationOf = combinationOf;
	};

	var publicAPI = {
		continuousCombinations
	};

	module.exports = publicAPI;
	
})();
