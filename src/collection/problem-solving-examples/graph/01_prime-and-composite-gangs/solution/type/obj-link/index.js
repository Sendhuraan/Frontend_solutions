'use strict';

(function() {

	var main = require('../../main').solution;

	var PrimeAndCompositeGangs = Object.create(main);

	PrimeAndCompositeGangs.init = function(input) {
		this.input = input;
	};

	var publicAPI = {
		PrimeAndCompositeGangs
	};

	module.exports = publicAPI;
	
})();
