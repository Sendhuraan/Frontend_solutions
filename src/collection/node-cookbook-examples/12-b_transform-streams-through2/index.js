'use strict';

(function() {

	const fs = require('fs');
	const path = require('path');

	const { uppercase } = require('./uppercase');

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const inputFile = getFullPath('data/input/input.txt');
	const outputFile = getFullPath('data/output/uppercase.txt');

	fs.createReadStream(inputFile)
	.pipe(uppercase())
	.pipe(fs.createWriteStream(outputFile));
		
})();
