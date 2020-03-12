(function() {

	var url = 'https://jsonplaceholder.typicode.com/posts';

	fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);
	});

})();
