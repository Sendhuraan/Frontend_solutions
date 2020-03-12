(function() {

	var main = require('../../main').singlyLinkedList;

	class Singly {
		constructor() {
			this.head = null;
			this.tail = null;
			this.length = 0;
		}
	}

	Object.setPrototypeOf(Singly.prototype, main);

	var publicAPI = {
		Singly
	};

	module.exports = publicAPI;
	
})();
