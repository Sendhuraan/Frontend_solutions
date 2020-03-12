'use strict';

(function() {

	const fs = require('fs');
	const path = require('path');

	const { stripSpaces } = require('./strip-spaces');

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const inputFile = getFullPath('data/input/input.txt');
	const outputFile = getFullPath('data/output/striped-spaces.txt');
	const outputLogFile = getFullPath('data/output/log.txt');

	function log() {
		fs.appendFile(outputLogFile, `Last edited : ${new Date()}\n`, function(err) {
			if(err) {
				console.error(err);
			}
		});
	}

	fs.createReadStream(inputFile)
		.pipe(stripSpaces())
		.on('end', log)
		.pipe(fs.createWriteStream(outputFile));
		
})();
