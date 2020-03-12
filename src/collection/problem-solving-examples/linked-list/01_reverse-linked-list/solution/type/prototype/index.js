'use strict';

(function() {

	var main = require('../../main').solution;

	function ReverseLinkedList(input) {
		this.input = input;
	}

	ReverseLinkedList.prototype = Object.create(main);

	var publicAPI = {
		ReverseLinkedList
	};

	module.exports = publicAPI;
	
})();
