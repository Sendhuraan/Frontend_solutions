'use strict';

(function() {

	const fs = require('fs');
	const path = require('path');

	const through = require('through2');

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const inputFile = getFullPath('data/input/input.json');
	const outputFile = getFullPath('data/output/output.json');

	function average() {

		return through.obj(function(chunk, encoding, callback) {
			const points = JSON.parse(chunk);

			var pointsAvg = points.map(function(point) {
				return {
					x: point.x,
					y: point.y,
					average: (point.x + point.y) / 2
				};
			});

			callback(null, pointsAvg);
		});

	}

	function toJSONString() {

		return through.obj(function(chunk, encoding, callback) {
			this.push(JSON.stringify(chunk, null, 4) + '\n');
			callback();
		});

	}

	fs.createReadStream(inputFile)
	.pipe(average())
	.pipe(toJSONString())
	.pipe(fs.createWriteStream(outputFile));
		
})();
