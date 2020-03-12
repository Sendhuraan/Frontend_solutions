'use strict';

(function() {

	var main = require('../../main').solution;

	var Combination = Object.create(main);

	Combination.init = function(inputArr, combinationOf) {
		this.inputArr = inputArr;
		this.combinationOf = combinationOf;
	};

	var publicAPI = {
		Combination
	};

	module.exports = publicAPI;
	
})();
