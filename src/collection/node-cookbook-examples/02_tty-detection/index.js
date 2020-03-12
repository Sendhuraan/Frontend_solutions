'use strict';

(function() {

	if(process.stdin.isTTY) {
		console.log('Input is passed directly to Node');
	}
	else {
		console.log('Input is passed via pipe.');
	}
	
})();
