'use strict';

(function() {

	const fs = require('fs');
	const path = require('path');
	const tableaux = require('tableaux');

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const inputFolder = getFullPath('data/input/my-folder');

	const dataTable_write = tableaux(
		{
			name: 'Name',
			size: 20
		},
		{
			name: 'Created',
			size: 30
		},
		{
			name: 'Device ID',
			size: 10
		},
		{
			name: 'Mode',
			size: 8
		},
		{
			name: 'Lnks',
			size: 4
		},
		{
			name: 'Size',
			size: 6
		}
	);

	

	function getMetaInfo(inputData) {
		var { file, dir } = inputData;

		const stats = fs.statSync(path.join(dir, file));

		var {
			birthtime,
			ino,
			mode,
			nlink,
			size

		} = stats;

		birthtime = birthtime.toUTCString();
		mode = mode.toString(8);
		size = `${size}B`;

		return {
			file,
			dir,
			info: [birthtime, ino, mode, nlink, size],
			isDir: stats.isDirectory()
		};
	}

	function printMetaInfo(inputData) {
		var {
			file,
			dir,
			info,
			isDir

		} = inputData;

		dataTable_write(file, ...info);

		if(!isDir) {
			return false;
		}
		else {
			const subdirPath = path.join(dir, file);
			dataTable_write.arrow();

			fs.readdirSync(subdirPath).forEach((file) => {
				const stats = fs.statSync(path.join(subdirPath, file));
				const style = stats.isDirectory() ? 'bold' : 'dim';
				
				dataTable_write[style](file);
			});

			dataTable_write.newline();
		}
	}

	function listDirInfo(dir) {
		fs.readdirSync(dir).map((file) => {
			return {
				file,
				dir 
			};

		})
		.map(getMetaInfo)
		.forEach(printMetaInfo);

		dataTable_write.newline();
	}


	listDirInfo(inputFolder);
	
})();
