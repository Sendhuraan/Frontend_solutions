'use strict';

(function() {

	function getSolution(type, input) {
		switch(type) {
			case 'function':
				var FunctionSolution = require('../solution').usingFunction.PrimeAndCompositeGangs;
				return new FunctionSolution(input);
				break;

			case 'object':
				var ObjectSolution = require('../solution').usingObjLink.PrimeAndCompositeGangs;
				ObjectSolution.init(input);
				return ObjectSolution;
				break;

			case 'class':
				var ClassSolution = require('../solution').usingClass.PrimeAndCompositeGangs;
				return new ClassSolution(input);
				break;

			default:
				return getSolution('object', input);
		}
	}

	var publicAPI = {
		getSolution
	};

	module.exports = publicAPI;
	
})();
