'use strict';

(function() {

	var path = require('path');
	var express = require('express');

	var { getStaticDir } = require('../utilities');

	var router = new express.Router();

	var staticDir = getStaticDir();

	router.get('/', function(request, response) {
		response.sendFile(path.join(`${staticDir}`, 'index.html'));
	});

	module.exports = router;
	
})();
