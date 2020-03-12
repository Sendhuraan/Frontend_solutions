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

		const stats = fs.lstatSync(path.join(dir, file));

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
			isDir: stats.isDirectory(),
			isSymLink: stats.isSymbolicLink()
		};
	}

	function printSymlinkInfo(file, dir, info) {
		dataTable_write(`\u001b[33m ${file} \u001b[0m`, ...info);
		process.stdout.write('\u001b[33m');
		dataTable_write.arrow(4);
		dataTable_write.bold(fs.readlinkSync(path.join(dir, file)));
		process.stdout.write('\u001b[0m');
		dataTable_write.newline();
	}

	function printMetaInfo(inputData) {
		var {
			file,
			dir,
			info,
			isDir,
			isSymLink

		} = inputData;

		if(isSymLink) {
			printSymlinkInfo(file, dir, info);
			return false;
		}

		dataTable_write(file, ...info);

		if(!isDir) {
			return false;
		}
		else {
			const subdirPath = path.join(dir, file);
			dataTable_write.arrow();

			fs.readdirSync(subdirPath).forEach((file) => {
				const stats = fs.lstatSync(path.join(subdirPath, file));
				const style = stats.isDirectory() ? 'bold' : 'dim';

				if(stats.isSymbolicLink()) {
					file = `\u001b[33m ${file} \u001b[0m`;
				}

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
