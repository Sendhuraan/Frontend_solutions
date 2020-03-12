'use strict';

(async function() {

	const fs = require('fs');
	const path = require('path');

	const inquirer = require('inquirer');

	var interactions = [
		{
			type: 'input',
			name: 'filename',
			message: 'Enter filename to check : '
		}
	];

	const userInput = await inquirer.prompt(interactions);

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	function isExists(file) {
		return new Promise((resolve, reject) => {
			fs.access(file, fs.constants.F_OK, (err) => {
				if(err) {
					if(err.code !== 'ENOENT') {
						reject(err);
					}
					else {
						resolve({
							exists: false
						});
					}
				}
				else {
					resolve({
						exists: true
					});
				}
			});
		});
	}

	const inputFile = getFullPath(userInput.filename);

	isExists(inputFile)
	.then((data) => {
		var { exists } = data;
		console.log(`${exists ? 'EXISTS' : 'DOES NOT EXISTS'}`);
	})
	.catch((err) => {
		console.error(err);
	});
	
})();
