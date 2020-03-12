(function() {

	var main = require('../../main').solution;

	class Parity {
		constructor(input) {
			this.input = input;
		}
	}

	Parity.prototype.buildTable = main.buildTable;
	Parity.prototype.using_shiftBits = main.using_shiftBits;
	Parity.prototype.using_clearSetBits = main.using_clearSetBits;
	Parity.prototype.using_lookupTable = main.using_lookupTable;
	Parity.prototype.using_xor = main.using_xor;
	Parity.prototype.index = main.index;

	var publicAPI = {
		Parity
	};

	module.exports = publicAPI;
	
})();
