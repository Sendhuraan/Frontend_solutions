'use strict';

(function() {

	var main = require('../../main').solution;

	function PrimeAndCompositeGangs(input) {
		this.input = input;
	}

	PrimeAndCompositeGangs.prototype = Object.create(main);

	var publicAPI = {
		PrimeAndCompositeGangs
	};

	module.exports = publicAPI;
	
})();
