'use strict';

(function() {

	function getSolution(type, input) {
		switch(type) {
			case 'function': {
				let { subsets } = require('../solution').usingFunction;
				let Solution = subsets;
				return new Solution(input);
				break;
			}

			case 'object': {
				let { subsets } = require('../solution').usingObjLink;
				subsets.init(input);
				return subsets;
				break;
			}
				
			case 'class': {
				let { subsets } = require('../solution').usingClass;
				let Solution = subsets;
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
