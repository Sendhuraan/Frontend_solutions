'use strict';

(function() {

	var main = require('../../main').solution;

	var subsets = Object.create(main);

	subsets.init = function(inputArr, combinationOf) {
		this.inputArr = inputArr;
		this.combinationOf = combinationOf;
	};

	var publicAPI = {
		subsets
	};

	module.exports = publicAPI;
	
})();
