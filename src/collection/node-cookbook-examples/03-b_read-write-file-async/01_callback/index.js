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

	fs.readFile(inputFile, function(err, data) {
		if(err) {
			console.error(err);
			process.exit(1);
		}
		else {
			const processedData = data.toString().replace(/ /g, '');

			fs.writeFile(outputFile, processedData, function(err) {
				if(err) {
					console.error(err);
					process.exit(1);
				}
				else {
					fs.appendFile(outputLogFile, `Last edited : ${new Date()}\n`, function(err) {
						if(err) {
							console.error(err);
						}
					});
				}

			});
		}
	});

})();
