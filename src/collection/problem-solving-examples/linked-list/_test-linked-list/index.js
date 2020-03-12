'use strict';

(function() {

	var SinglyLinkedList = require('@sendhuraan/js-utilities').DataStructures.LinkedList.Singly.usingFunction.Singly;

	var list = new SinglyLinkedList();
	list.push(80);
	list.push(90);
	list.push(100);

	console.log(JSON.stringify(list, null, 4));
	
})();




