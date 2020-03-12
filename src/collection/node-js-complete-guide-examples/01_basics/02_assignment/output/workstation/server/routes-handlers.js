'use strict';

(function() {

	function listUsers(request, response) {
		var users = [
			{
				name: 'user-1',
				email: 'user1@gmail.com'
			},
			{
				name: 'user-2',
				email: 'user2@gmail.com'
			},
			{
				name: 'user-3',
				email: 'user3@gmail.com'
			}
		];

		var dataHTMLStr = users.reduce(function(str, user) {
			str += `<li>
					<span>${user.name}</span>
					<br />
					<span>${user.email}</span>
				</li>`;

			return str;
		}, '');

		var responseStr = `<ul>${dataHTMLStr}</ul>`;

		response.end(responseStr);
	}

	function createUser(request, response) {
		const body = [];

		request.on('data', function(chunk) {
			body.push(chunk);
		});

		request.on('end', function() {
			var messageData = Buffer.concat(body).toString();
			console.log(messageData);
		});

		response.end('Data received!')
	}

	var publicAPI = {
		listUsers,
		createUser
	};

	module.exports = publicAPI;
	
})();
