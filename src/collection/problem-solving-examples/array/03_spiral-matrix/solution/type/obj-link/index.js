'use strict';

(function() {

	var main = require('../../main').solution;

	var spiralMatrix = Object.create(main);

	spiralMatrix.init = function(inputMatrix) {
		this.inputMatrix = inputMatrix;
	};

	var publicAPI = {
		spiralMatrix
	};

	module.exports = publicAPI;
	
})();
