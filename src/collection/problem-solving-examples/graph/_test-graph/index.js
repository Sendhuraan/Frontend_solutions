'use strict';

(function() {

	var UndirectedGraph = require('@sendhuraan/js-utilities').DataStructures.Graph.Undirected.usingFunction.Undirected;

	var nodeGraph = new UndirectedGraph();

	nodeGraph.addVertex('A');
	nodeGraph.addVertex('B');
	nodeGraph.addVertex('C');
	nodeGraph.addVertex('D');
	nodeGraph.addVertex('E');
	nodeGraph.addVertex('F');

	nodeGraph.addEdge('A', 'B');
	nodeGraph.addEdge('A', 'C');
	nodeGraph.addEdge('B', 'D');
	nodeGraph.addEdge('C', 'E');
	nodeGraph.addEdge('D', 'E');
	nodeGraph.addEdge('D', 'F');
	nodeGraph.addEdge('E', 'F');

	console.log(nodeGraph.depthFirstSearch_recursive('A'));
	console.log(nodeGraph.depthFirstSearch_iterative('A'));
	console.log(nodeGraph.breadthFirstSearch_iterative('A'));
	
})();




