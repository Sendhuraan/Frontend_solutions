'use strict';

(function() {

	var usingFunction = require('./type/prototype');
	var usingObjLink = require('./type/obj-link');
	var usingClass = require('./type/class');

	var publicAPI = {
		usingFunction,
		usingObjLink,
		usingClass
	};

	module.exports = publicAPI;
	
})();
