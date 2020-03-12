'use strict';

(function() {

	var base64_encode = require('base64-encode-stream');

	process.stdout.write('Type input to convert to base64: ');
	process.stdin.pipe(base64_encode()).pipe(process.stdout);
	
})();
