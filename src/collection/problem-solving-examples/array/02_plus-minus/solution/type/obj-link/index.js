'use strict';

(function() {

	var main = require('../../main').solution;

	var ReverseLinkedList = Object.create(main);

	ReverseLinkedList.init = function(input) {
		this.input = input;
	};

	var publicAPI = {
		ReverseLinkedList
	};

	module.exports = publicAPI;
	
})();
