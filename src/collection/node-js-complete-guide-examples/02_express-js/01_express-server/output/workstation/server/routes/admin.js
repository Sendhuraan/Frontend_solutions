'use strict';

(function() {

	var path = require('path');
	var express = require('express');

	var { getStaticDir } = require('../utilities');

	var router = new express.Router();

	var staticDir = getStaticDir();

	router.get('/add-product', function(request, response) {
		response.sendFile(path.join(`${staticDir}`, 'add-product.html'));
	});

	router.post('/add-product', function(request, response) {
		console.log(request.body);
		response.redirect('/');
	});

	module.exports = router;
	
})();
