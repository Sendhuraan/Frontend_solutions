'use strict';

(function() {

	var fs = require('fs');
	var path = require('path');

	const numbers = {
		type: {
			prime: 'PRIME',
			composite: 'COMPOSITE'
		}
	};

	function buildPrimeAndCompositeTable(maxNumber) {
		maxNumber = maxNumber + 1;
		const table = new Array(maxNumber).fill(numbers.type.prime);
		table[0] = NaN;
		table[1] = NaN;

		for (let i = 2; i < Math.sqrt(maxNumber); i++) {
			if (table[i] === numbers.type.prime) {
				for (let j = Math.pow(i, 2); j < maxNumber; j += i) {
					table[j] = numbers.type.composite;
				}
			}
		}

		return table;
	}

	const primeCompositeTable = buildPrimeAndCompositeTable(10000);

	function prime(value) {
		if(primeCompositeTable[Number(value)] === numbers.type.prime) {
			return 1;
		}
		else {
			return 0;
		}
	}

	function composite(value) {
		if(primeCompositeTable[Number(value)] === numbers.type.composite) {
			return 1;
		}
		else {
			return 0;
		}
	}

	function getPatternCount(matrix) {
		if (!matrix || matrix.length === 0) {
			return 0;
		}

		const m = matrix.length;
		const n = matrix[0].length;

		let count = 0;

		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (matrix[i][j] === 1) {
					depthFirstSearch(matrix, m, n, i, j);
					count++;
				}
			}
		}

		return count;
	}

	function depthFirstSearch(matrix, m, n, i, j) {
		if (i < 0 || i >= m || j < 0 || j >= n || matrix[i][j] === 0) {
			return;
		}

		matrix[i][j] = 0;

		const dx = [0, 0, -1, 1];
		const dy = [-1, 1, 0, 0];

		for (let k = 0; k < 4; k++) {
			depthFirstSearch(matrix, m, n, i + dx[k], j + dy[k]);
		}
	}

	function main(input) {
		var lines = input.split('\n');
		var totalTestCases = Number(lines[0]);
		var inputMatrices = [];

		var currentTestCase = 1;
		var lineNumber = 1;
		while (currentTestCase <= totalTestCases) {

			var currentMatrixDimensions = lines[lineNumber].split(' ');

			var currentMatrixRows = Number(currentMatrixDimensions[0]);

			var inputMatrix_prime = [];
			var inputMatrix_composite = [];
			for(let matrixRow=1; matrixRow <= currentMatrixRows; matrixRow++) {
				let inputRow = lines[lineNumber + matrixRow].split(' ');

				inputMatrix_prime.push(inputRow.map(prime));
				inputMatrix_composite.push(inputRow.map(composite));
			}

			var inputPrimeCompositeObj = {
				'prime': inputMatrix_prime,
				'composite': inputMatrix_composite
			};

			inputMatrices.push(inputPrimeCompositeObj);

			lineNumber = lineNumber + currentMatrixRows + 1;
			currentTestCase++;

		}

		var resultsArray = inputMatrices.map(function(testCase) {
			let resultArray = [];
			for(let matrixType in testCase) {
				resultArray.push(getPatternCount(testCase[matrixType]));
			}

			return resultArray;
		});

		resultsArray.map(function(result) {
			console.log(`${result[0]} ${result[1]}`);
		});
		
	}

	process.stdin.resume();
	process.stdin.setEncoding('utf-8');
	var stdin_input = '';

	var inputFile = path.join(__dirname, '/sample-input.txt');
	var readFile = fs.createReadStream(inputFile);

	readFile.on('data', function(input) {
		stdin_input += input;
	});

	readFile.on('end', function() {
		main(stdin_input);
		process.exit(1);
	});
	
})();
