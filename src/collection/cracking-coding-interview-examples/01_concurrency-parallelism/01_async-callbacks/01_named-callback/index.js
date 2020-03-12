'use strict';

(function() {

	function greet(name) {
		console.log(`Hello ${name}`);
	}

	function introduction(firstname, lastname, callback) {
		const name = `${firstname} ${lastname}`;

		callback(name);
	}

	introduction('Sendhuraan', 'NKK', greet);

	console.log('After introduction');
	
})();
