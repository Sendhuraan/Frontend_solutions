(function() {

	var main = require('../../main').binarySearchTree;

	var BinarySearchTree = Object.create(main);

	BinarySearchTree.init = function() {
		this.root = null;
	};

	var publicAPI = {
		BinarySearchTree
	};

	module.exports = publicAPI;
	
})();
