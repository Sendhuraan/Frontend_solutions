'use strict';

(function() {

	var main = require('../../main').solution;

	class spiralMatrix {
		constructor(inputMatrix) {
			this.inputMatrix = inputMatrix;
		}
	}

	Object.setPrototypeOf(spiralMatrix.prototype, main);

	var publicAPI = {
		spiralMatrix
	};

	module.exports = publicAPI;
	
})();
