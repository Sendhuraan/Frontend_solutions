(function() {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
			let response = JSON.parse(xhr.responseText);
			console.log(response);
		}
	};

	xhr.onprogress = function() {
		console.log('Loading');
	};

	xhr.onload = function() {
		console.log('Done');
	};

	xhr.send();

})();
