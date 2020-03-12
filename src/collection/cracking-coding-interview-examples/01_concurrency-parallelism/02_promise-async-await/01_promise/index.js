'use strict';

(function() {

	const firstPromise = new Promise(function(resolve) {
		setTimeout(function() {
			var returnData = 42;
			resolve(returnData);
		}, 3000);
	});

	firstPromise
	.then(function(value) {
		console.log(`Success: ${value}`);
	});
	
})();
