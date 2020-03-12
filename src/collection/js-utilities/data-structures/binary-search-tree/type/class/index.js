(function() {

	var main = require('../../main').binarySearchTree;

	class BinarySearchTree {
		constructor() {
			this.root = null;
		}
	}

	Object.setPrototypeOf(BinarySearchTree.prototype, main);

	var publicAPI = {
		BinarySearchTree
	};

	module.exports = publicAPI;
	
})();
