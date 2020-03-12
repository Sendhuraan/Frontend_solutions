/* eslint no-self-compare: 'off' */

'use strict';

(function() {

	function is(x, y) {
		var xNegZero = checkIfNegativeZero(x);
		var yNegZero = checkIfNegativeZero(y);

		if (xNegZero || yNegZero) {
			return xNegZero && yNegZero;
		}
		else if (checkIfNaN(x) && checkIfNaN(y)) {
			return true;
		}
		else if (x === y) {
			return true;
		}

		return false;

		// **********
		function checkIfNegativeZero(x) {
			return x === 0 && (1 / x) === -Infinity;
		}

		function checkIfNaN(x) {
			return x !== x;
		}
	}

	var publicAPI = {
		check: {
			is
		}
	};

	module.exports = publicAPI;
	
})();

