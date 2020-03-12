(function() {

	var LinkedList = require('./linked-list');
	var BinarySearchTree = require('./binary-search-tree');
	var Graph = require('./graph');

	var publicAPI = {
		LinkedList,
		BinarySearchTree,
		Graph
	};

	module.exports = publicAPI;
	
})();
