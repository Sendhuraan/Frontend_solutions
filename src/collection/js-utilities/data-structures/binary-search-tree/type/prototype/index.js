(function() {

	var main = require('../../main').binarySearchTree;

	function BinarySearchTree() {
		this.root = null;
	}

	BinarySearchTree.prototype = Object.create(main);

	var publicAPI = {
		BinarySearchTree
	};

	module.exports = publicAPI;
	
})();
