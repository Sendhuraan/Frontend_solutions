'use strict';

(function() {

	var Utils = require('./utilities');
	var SinglyLinkedList = require('@sendhuraan/js-utilities').DataStructures.LinkedList.Singly.usingFunction.Singly;

	function using_popPush(inputList = this.input) {
		let localList = new SinglyLinkedList();
		let currentNode = inputList.head;

		while(currentNode !== null) {
			localList.push(currentNode.data);
			currentNode = currentNode.next;
		}

		let reversedList = new SinglyLinkedList();

		// Loop until head & tail are equal
		while(localList.head !== localList.tail) {
			reversedList.push(localList.pop().data);
		}

		// push the last data into reversedList
		reversedList.push(localList.head.data);

		return reversedList;
	}

	function using_reverseLinks(inputList = this.input) {
		// Making a local copy of list
		let outputList = new SinglyLinkedList();
		let currentNode_input = inputList.head;

		while(currentNode_input !== null) {
			outputList.push(currentNode_input.data);
			currentNode_input = currentNode_input.next;
		}

		let previousNode = null;
		let currentNode = outputList.head;
		let nextNode = null;

		while(currentNode) {
			nextNode = currentNode.next;
			currentNode.next = previousNode;
			previousNode = currentNode;
			currentNode = nextNode;
		}

		outputList.tail = outputList.head;
		outputList.head = previousNode;

		return outputList;
	}

	function using_recursion(x = this.input) {
		// TODO
	}

	const index = using_reverseLinks;

	var solution = Object.create(Utils);

	solution.using_popPush = using_popPush;
	solution.using_reverseLinks = using_reverseLinks;
	solution.using_recursion = using_recursion;
	solution.index = index;

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
