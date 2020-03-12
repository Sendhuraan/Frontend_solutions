(function() {

	var main = require('../../main').graph;

	class Graph {
		constructor() {
			this.adjacencyList = [];
		}
	}

	Object.setPrototypeOf(Graph.prototype, main);

	var publicAPI = {
		Graph
	};

	module.exports = publicAPI;
	
})();
