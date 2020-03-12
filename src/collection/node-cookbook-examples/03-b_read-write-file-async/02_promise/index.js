'use strict';

(function() {

	const fs = require('fs');
	const path = require('path');
	const util = require('util');

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const inputFile = getFullPath('data/input/input.txt');
	const outputFile = getFullPath('data/output/striped-spaces.txt');
	const outputLogFile = getFullPath('data/output/log.txt');

	// Manually creating promise
	fs.readFileAsync = function(filename) {
		return new Promise(function(resolve, reject) {
			fs.readFile(filename, function(err, data) {
				if(err) {
					reject(err);
				}
				else {
					resolve(data);
				}
			});
		});
	};

	// Using util from node to make promise
	const writeFile = util.promisify(fs.writeFile);
	const appendFile = util.promisify(fs.appendFile);

	fs.readFileAsync(inputFile)
	.then(function(data) {
		const processedData = data.toString().replace(/ /g, '');

		writeFile(outputFile, processedData)
		.then(function() {
			appendFile(outputLogFile, `Last edited : ${new Date()}\n`);
		});
	});

})();
