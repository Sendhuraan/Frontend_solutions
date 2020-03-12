(function() {

	var main = require('../../main').singlyLinkedList;

	var Singly = Object.create(main);

	Singly.init = function() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	};

	var publicAPI = {
		Singly
	};

	module.exports = publicAPI;
	
})();
