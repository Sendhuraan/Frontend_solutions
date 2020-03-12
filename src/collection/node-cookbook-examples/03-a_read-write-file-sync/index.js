'use strict';

(function() {

	const fs = require('fs');
	const path = require('path');

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const inputFile = getFullPath('data/input/input.txt');
	const outputFile = getFullPath('data/output/striped-spaces.txt');
	const outputLogFile = getFullPath('data/output/log.txt');

	const inputData = fs.readFileSync(inputFile);

	const processedData = inputData.toString().replace(/ /g, '');

	fs.writeFileSync(outputFile, processedData);
	fs.appendFileSync(outputLogFile, `Last edited : ${new Date()}\n`);

	
})();
