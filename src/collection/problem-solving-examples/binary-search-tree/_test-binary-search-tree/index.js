'use strict';

(function() {

	var BinarySearchTree = require('@sendhuraan/js-utilities').DataStructures.BinarySearchTree.usingFunction.BinarySearchTree;

	var tree = new BinarySearchTree();
	tree.insert(80);
	tree.insert(10);
	tree.insert(90);

	console.log(JSON.stringify(tree, null, 4));
	
})();




