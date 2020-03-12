'use strict';

(function() {

	function getSolution(type, input) {
		switch(type) {
			case 'function': {
				let { continuousCombinations } = require('../solution').usingFunction;
				let Solution = continuousCombinations;
				return new Solution(input);
				break;
			}

			case 'object': {
				let { continuousCombinations } = require('../solution').usingObjLink;
				continuousCombinations.init(input);
				return continuousCombinations;
				break;
			}
				
			case 'class': {
				let { continuousCombinations } = require('../solution').usingClass;
				let Solution = continuousCombinations;
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
