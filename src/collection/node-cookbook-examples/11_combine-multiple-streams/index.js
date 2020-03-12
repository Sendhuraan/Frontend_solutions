'use strict';

(function() {

	const fs = require('fs');
	const path = require('path');
	const { createGzip } = require('zlib');
	const { createCipheriv, randomBytes } = require('crypto');

	var base64_encode = require('base64-encode-stream');
	var pumpify = require('pumpify');

	function getFullPath(pathname) {
		return path.join(__dirname, pathname);
	}

	const inputFile = getFullPath('data/input/input.txt');
	const outputFile = getFullPath('data/output/output.gz');

	function pump_pipeline() {
		const readStream = fs.createReadStream(inputFile);
		const compress = createGzip();

		const key = new Buffer('SendhuraanPasskeSendhuraanPasske');
		const iv = new Buffer(randomBytes(16)).toString('hex').slice(0, 16);
		const encrypt = createCipheriv('aes-256-cbc', key, iv);

		const encode = base64_encode();
		const writeStream = fs.createWriteStream(outputFile);

		return pumpify(readStream, compress, encrypt, encode, writeStream);
	}

	const processData = pump_pipeline();

	processData.on('end', function() {
		console.log('Read start');
	});

	processData.on('data', function(data) {
		console.log(`Write stream says : ${data.toString()}`);
	});

	processData.on('finish', function() {
		
		// output deleted for security reasons. Run index.js to generate the output
		console.log('All data written successfully');
	});

	
})();
