(function() {

	var UndirectedGraph = require('./undirected');
	// var DirectedGraph = require('./directed');
	// var WeightedGraph = require('./undirected');

	var publicAPI = {
		Undirected: UndirectedGraph
		// Directed: DirectedGraph,
		// Weighted: WeightedGraph
	};

	module.exports = publicAPI;
	
})();
