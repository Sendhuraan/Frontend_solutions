'use strict';

(function() {

	var Utils = require('./utilities');

	function using_nextDirection(inputMatrix = [...this.inputMatrix]) {
		let directions = {
			right: {
				value: [0,1],
				next: 'bottom'
			},
			bottom: {
				value: [1,0],
				next: 'left'
			},
			left: {
				value: [0,-1],
				next: 'top'
			},
			top: {
				value: [-1,0],
				next: 'right'
			}
		};

		let rows = inputMatrix.length;
		let columns = inputMatrix[0].length;

		let currentDirection = 'right';
		let x = 0;
		let y = 0;
		let results = [];

		for(let i=0; i < rows * columns; i++) {
			results.push(inputMatrix[x][y]);
			inputMatrix[x][y] = false;

			let next_x = x + directions[currentDirection]['value'][0];
			let next_y = y + directions[currentDirection]['value'][1];

			if(next_x < 0 || next_x >= rows || next_y < 0 || next_y >= columns || inputMatrix[next_x][next_y] === false) {
				currentDirection = directions[currentDirection].next;
				next_x = x + directions[currentDirection]['value'][0];
				next_y = y + directions[currentDirection]['value'][1];
			}

			x = next_x;
			y = next_y;
		}

		return results;
	}


	const index = using_nextDirection;

	var solution = Object.create(Utils);

	solution.using_nextDirection = using_nextDirection;
	solution.index = index;

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
