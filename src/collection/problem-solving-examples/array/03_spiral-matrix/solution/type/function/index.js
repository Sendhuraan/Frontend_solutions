'use strict';

(function() {

	var main = require('../../main').solution;

	function spiralMatrix(inputMatrix) {
		this.inputMatrix = inputMatrix;
	}

	spiralMatrix.prototype = Object.create(main);

	var publicAPI = {
		spiralMatrix
	};

	module.exports = publicAPI;
	
})();
