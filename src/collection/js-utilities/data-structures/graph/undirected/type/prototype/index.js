(function() {

	var main = require('../../main').graph;

	function Undirected() {
		this.adjacencyList = [];
	}

	Undirected.prototype = Object.create(main);

	var publicAPI = {
		Undirected
	};

	module.exports = publicAPI;
	
})();
