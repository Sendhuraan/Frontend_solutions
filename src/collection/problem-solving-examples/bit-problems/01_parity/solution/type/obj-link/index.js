(function() {

	var main = require('../../main').solution;

	var Parity = Object.create(main);

	Parity.init = function(input) {
		this.input = input;
	};

	var publicAPI = {
		Parity
	};

	module.exports = publicAPI;
	
})();
