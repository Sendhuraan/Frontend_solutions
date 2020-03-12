'use strict';

(function() {

	var main = require('../../main').solution;

	class PrimeAndCompositeGangs {
		constructor(input) {
			this.input = input;
		}
	}

	Object.setPrototypeOf(PrimeAndCompositeGangs.prototype, main);

	var publicAPI = {
		PrimeAndCompositeGangs
	};

	module.exports = publicAPI;
	
})();
