(function() {

	var { Node } = require('./models');
	var Utils = require('./utilities');

	function addVertex(vertex) {
		if(!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	function addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	function depthFirstSearch_recursive(startVertex) {
		let result = [];
		let visited = {};
		let adjacencyList = this.adjacencyList;

		function dfs_helper(vertex) {
			
			if(!vertex) {
				return false;
			}
			else {
				result.push(vertex);
				visited[vertex] = true;

				adjacencyList[vertex].forEach(function(neighbor) {
					if(!visited[neighbor]) {
						return dfs_helper(neighbor);
					}
				});
			}
		}

		dfs_helper(startVertex);

		return result;
	}

	function depthFirstSearch_iterative(startVertex) {
		let result = [];
		let visited = {
			[startVertex]: true
		};
		let nodeStack = [startVertex];
		let currentVertex;

		while(nodeStack.length) {
			currentVertex = nodeStack.pop();
			result.push(currentVertex);
			
			this.adjacencyList[currentVertex].forEach(function(neighbor) {
				if(!visited[neighbor]) {
					visited[neighbor] = true;
					nodeStack.push(neighbor);
				}
			});

		}

		return result;
	}

	function breadthFirstSearch_iterative(startVertex) {
		let result = [];
		let visited = {
			[startVertex]: true
		};
		let nodeQueue = [startVertex];
		let currentVertex;

		while(nodeQueue.length) {
			currentVertex = nodeQueue.shift();
			result.push(currentVertex);
			
			this.adjacencyList[currentVertex].forEach(function(neighbor) {
				if(!visited[neighbor]) {
					visited[neighbor] = true;
					nodeQueue.push(neighbor);
				}
			});

		}

		return result;
	}

	var graph = Object.create(Utils);

	graph.addVertex = addVertex;
	graph.addEdge = addEdge;
	graph.depthFirstSearch_recursive = depthFirstSearch_recursive;
	graph.depthFirstSearch_iterative = depthFirstSearch_iterative;
	graph.breadthFirstSearch_iterative = breadthFirstSearch_iterative;

	var publicAPI = {
		graph
	};

	module.exports = publicAPI;
	
})();
