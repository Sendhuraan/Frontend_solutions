'use strict';

(async function() {

	const fs = require('fs');
	const path = require('path');
	const { execSync } = require('child_process');

	const inquirer = require('inquirer');

	var interactions = [
		{
			type: 'input',
			name: 'filename',
			message: 'Enter filename to create : '
		}
	];

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const userInput = await inquirer.prompt(interactions);
	const filename = getFullPath(userInput.filename);

	function createFile() {
		fs.writeFileSync(filename, '');
		fs.chmodSync(filename, 0);
		console.log('File created');
	}

	if(!userInput.filename) {
		console.error('Specify a file');
		process.exit(1);
	}

	try {
		fs.accessSync(filename);
		console.error('File already exists');
		process.exit(1);
	}
	catch(err) {
		createFile();
	}
	
})();
