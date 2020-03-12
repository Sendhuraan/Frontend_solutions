'use strict';

(function() {

	var main = require('../../main').solution;

	class ReverseLinkedList {
		constructor(input) {
			this.input = input;
		}
	}

	Object.setPrototypeOf(ReverseLinkedList.prototype, main);

	var publicAPI = {
		ReverseLinkedList
	};

	module.exports = publicAPI;
	
})();
