'use strict';

(async function() {

	const fs = require('fs');
	const path = require('path');
	const util = require('util');

	const readFile = util.promisify(fs.readFile);
	const writeFile = util.promisify(fs.writeFile);
	const appendFile = util.promisify(fs.appendFile);

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const inputFile = getFullPath('data/input/input.txt');
	const outputFile = getFullPath('data/output/striped-spaces.txt');
	const outputLogFile = getFullPath('data/output/log.txt');

	const inputData = await readFile(inputFile);

	const processedData = inputData.toString().replace(/ /g, '');

	await writeFile(outputFile, processedData);
	await appendFile(outputLogFile, `Last edited : ${new Date()}\n`);

})();
