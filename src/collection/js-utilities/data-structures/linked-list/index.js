(function() {

	var SinglyLinkedList = require('./singly-linked-list');
	// var DoublyLinkedList = require('./doubly-linked-list');

	var publicAPI = {
		Singly: SinglyLinkedList
		// Doubly: DoublyLinkedList
	};

	module.exports = publicAPI;
	
})();
