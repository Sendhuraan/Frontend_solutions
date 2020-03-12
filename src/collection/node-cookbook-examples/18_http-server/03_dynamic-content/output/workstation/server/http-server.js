'use strict';

(function() {

	var fs = require('fs');
	var http = require('http');
	var url = require('url');
	var querystring = require('querystring');
	var util = require('util');

	const usersList = [ 
		{
			'id': 1,
			'first_name': 'Bob',
			'last_name': 'Smith',
			type: 'red'
		}, 
		{
			'id': 2,
			'first_name': 'David',
			'last_name': 'Clements',
			type: 'blue'
		}
	];

	function users(data, query, res) {
		const { type } = querystring.parse(query);
		let responseData;

		if(!type) {
			responseData = data;
		}
		else {
			responseData = data.filter(function(user) {
				return user.type === type;
			});
		}

		res.end(`
		{
			'data': ${JSON.stringify(responseData)}
		}
		`);
	}

	function index(res) {
		res.end(`
		{
			'name': 'my-basic-rest-server',
			'version': '0.0.1'
		}
		`);
	}

	function error(res, code) {
		res.statusCode = code;
		res.end(`
		{
			'error': ${http.STATUS_CODES[code]}
		}
		`);
	}

	class HttpServer {

		constructor() {
			this._httpServer = http.createServer(function onRequest(req, res) {

				const { pathname, query } = url.parse(req.url);
				
				if(req.method !== 'GET') {
					return error(res, 405);
				}

				if(req.url === '/') {
					return index(res);
				}

				if(pathname === '/users') {
					return users(usersList, query, res);
				}
				else {
					error(res, 404);
				}

			});
		}

		start(portNumber) {
			const listen = util.promisify(this._httpServer.listen.bind(this._httpServer));
			return listen(portNumber);
		}

		stop() {
			const close = util.promisify(this._httpServer.close.bind(this._httpServer));
			return close();
		}

		getNodeServer() {
			return this._httpServer;
		}

	}

	var publicAPI = {
		HttpServer
	};

	module.exports = publicAPI;

})();
