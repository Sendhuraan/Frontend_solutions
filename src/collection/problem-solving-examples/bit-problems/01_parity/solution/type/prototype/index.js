(function() {

	var main = require('../../main').solution;

	function Parity(input) {
		this.input = input;
	}

	Parity.prototype = Object.create(main);

	var publicAPI = {
		Parity
	};

	module.exports = publicAPI;
	
})();
