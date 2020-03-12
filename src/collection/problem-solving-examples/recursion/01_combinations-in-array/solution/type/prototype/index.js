'use strict';

(function() {

	var main = require('../../main').solution;

	function Combination(inputArr, combinationOf) {
		this.inputArr = inputArr;
		this.combinationOf = combinationOf;
	}

	Combination.prototype = Object.create(main);

	var publicAPI = {
		Combination
	};

	module.exports = publicAPI;
	
})();
