'use strict';

(function() {

	function getRandomDelay() {
		return Math.floor((Math.random() * 1000) + 1);
	}

	function first() {
		setTimeout(function() {
			console.log(1);
		}, getRandomDelay());
	}

	function second() {
		setTimeout(function() {
			console.log(2);
		}, getRandomDelay());
	}

	first();
	second();

	for(var i = 1000; i > 0; i = i - 100) {

		(function(input) {
			setTimeout(function() {
				console.log(`Performing other work ${input}`);
			}, input);
		})(i);
		
	}
	
})();
