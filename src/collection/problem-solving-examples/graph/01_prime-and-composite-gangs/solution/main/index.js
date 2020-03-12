'use strict';

(function() {

	var Utils = require('./utilities');

	function using_graph2DMatrixDFS(x = this.input) {
		return x;
	}

	const index = using_graph2DMatrixDFS;

	var solution = Object.create(Utils);

	solution.using_graph2DMatrixDFS = using_graph2DMatrixDFS;
	solution.index = index;

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
