(function() {

	function main() {
		console.log('Before promise created');

		new Promise(function(resolve) {
			console.log('Executing promise');
			resolve();
		})
		.then(function() {
			console.log('Finished promise');
		});

		console.log('After promise created');
	}

	function randomNumber() {
		new Promise(function(resolve) {
			setTimeout(function() {
				resolve(Math.random());
			}, 5000);
		})
		.then(function(result) {
			console.log(`Random number: ${result}`);
		});
	}

	function handlingError() {
		new Promise(function(resolve, reject) {
			reject(new Error('Something went wrong'));
			resolve();
		})
		.then(function(result) {
			console.log('Promise completed');
		})
		.catch(function(error) {
			console.error(error);
		});
	}

	main();
	randomNumber();
	handlingError();
	
})();
