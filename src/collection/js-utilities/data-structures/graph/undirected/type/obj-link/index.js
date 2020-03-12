(function() {

	var main = require('../../main').graph;

	var Undirected = Object.create(main);

	Undirected.init = function() {
		this.adjacencyList = [];
	};

	var publicAPI = {
		Undirected
	};

	module.exports = publicAPI;
	
})();
