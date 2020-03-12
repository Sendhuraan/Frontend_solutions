'use strict';

(function() {

	function getSolution(type, input) {
		switch(type) {
			case 'function': {
				let { spiralMatrix } = require('../solution').usingFunction;
				let Solution = spiralMatrix;
				return new Solution(input);
				break;
			}

			case 'object': {
				let { spiralMatrix } = require('../solution').usingObjLink;
				spiralMatrix.init(input);
				return spiralMatrix;
				break;
			}
				
			case 'class': {
				let { spiralMatrix } = require('../solution').usingClass;
				let Solution = spiralMatrix;
				return new Solution(input);
				break;
			}

			default:
				return getSolution('object', input);
		}
	}

	var publicAPI = {
		getSolution
	};

	module.exports = publicAPI;
	
})();
