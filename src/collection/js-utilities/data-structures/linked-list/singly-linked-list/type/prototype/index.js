(function() {

	var main = require('../../main').singlyLinkedList;

	function Singly() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	Singly.prototype = Object.create(main);

	var publicAPI = {
		Singly
	};

	module.exports = publicAPI;
	
})();
