'use strict';

(function() {

	const from = require('from2');

	function createInfiniteTickStream() {
		var tick = 0;

		return from.obj(function(size, callback) {

			setImmediate(function() {
				callback(null, {
					tick: tick++
				});	
			});
			
		});
	}

	const stream = createInfiniteTickStream();

	stream.on('data', function(data) {
		console.log(data);
	});

	stream.on('close', function(data) {
		console.log('stream destroyed');
	});

	setTimeout(function() {
		stream.destroy();
	}, 1000);

})();
