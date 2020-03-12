'use strict';

(function() {

	var path = require('path');

	function getStaticDir() {
		return path.join(__dirname, '../../', 'dist');
	}

	var publicAPI = {
		getStaticDir
	};

	module.exports = publicAPI;
	
})();
