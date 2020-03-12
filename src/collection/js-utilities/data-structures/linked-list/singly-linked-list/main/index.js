(function() {

	var { Node } = require('./models');
	var Utils = require('./utilities');

	function push(data) {
		var newNode = new Node(data);

		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	function pop() {

		if(!this.head) {
			return undefined;
		}
		else {
			var currentNode = this.head;
			var previousNode = currentNode;

			while(currentNode.next) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			this.tail = previousNode;
			this.tail.next = null;
			this.length--;

			if(this.length === 0) {
				this.head = null;
				this.tail = null;
			}

			return currentNode;
		}

	}

	function shift() {

		if(!this.head) {
			return undefined;
		}
		else {
			var currentNode = this.head;
			this.head = currentNode.next;
			this.length--;

			if(this.length === 0) {
				this.tail = null;
			}

			return currentNode;
		}
	}

	function unshift(data) {

		var newNode = new Node(data);

		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		}
		else {
			newNode.next = this.head;
			this.head = newNode;
		}
		
		this.length++;

		return this;
	}

	function get(index) {

		if(index < 0 || index >= this.length) {
			return null;
		}
		else {
			var counter = 0;
			var currentNode = this.head;

			while(counter !== index) {
				currentNode = currentNode.next;
				counter++;
			}

			return currentNode;
		}
		
	}

	function set(index, data) {
		var getNode = this.get(index);

		if(getNode) {
			getNode.data = data;
			return true;
		}
		else {
			return false;
		}
	}

	function insert(index, data) {
		if(index < 0 || index > this.length) {
			return false;
		}
		else if(index === this.length) {
			return this.push(data);
		}
		else if(index === 0) {
			return this.unshift(data);
		}
		else {
			var newNode = new Node(data);

			var previousNodeToIndex = this.get(index - 1);
			previousNodeToIndex.next = newNode; 

			var currentNodeAtIndex = previousNodeToIndex.next;
			newNode.next = currentNodeAtIndex;
		}
	}

	var singlyLinkedList = Object.create(Utils);

	singlyLinkedList.push = push;
	singlyLinkedList.pop = pop;
	singlyLinkedList.shift = shift;
	singlyLinkedList.unshift = unshift;
	singlyLinkedList.get = get;
	singlyLinkedList.set = set;
	singlyLinkedList.insert = insert;

	var publicAPI = {
		singlyLinkedList
	};

	module.exports = publicAPI;
	
})();
