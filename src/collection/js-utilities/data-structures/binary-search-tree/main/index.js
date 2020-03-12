(function() {

	var { Node } = require('./models');
	var Utils = require('./utilities');

	function insert(data) {
		var newNode = new Node(data);

		if(this.root === null) {
			this.root = newNode;
			return this;
		}
	}	

	var binarySearchTree = Object.create(Utils);

	binarySearchTree.insert = insert;

	var publicAPI = {
		binarySearchTree
	};

	module.exports = publicAPI;
	
})();
