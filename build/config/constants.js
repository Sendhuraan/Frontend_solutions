'use strict';

(function() {
	const DEFAULT_FOLDER_STRING = 'src/collection';
	const DEFAULT_LINT__GLOBAL = [
		'**/*.js',
		'!node_modules/**',
		'!src/collection/**'
	];
	const DEFAULT_CONFIG_DIR = 'build/config';
	const DEFAULT_UTILS_DIR = 'build/utilities';
	const DEFAULT_DISTRIBUTION_DIR = 'dist';

	var defaults = {
		DEFAULT_FOLDER_STRING,
		DEFAULT_LINT__GLOBAL,
		DEFAULT_CONFIG_DIR,
		DEFAULT_UTILS_DIR,
		DEFAULT_DISTRIBUTION_DIR
	};

	var publicAPI = {
		defaults
	};

	module.exports = publicAPI;
})();
