(function() {

	var ejs = require('ejs');

	var header = require('../../shared/_header.html');
	var content = require('../../content/_index-content.html');
	var footer = require('../../shared/_footer.html');

	function combinePartials() {
		return `${header} ${content} ${footer}`;
	}

	module.exports = function(templateParams) {
		var html = ejs.render(combinePartials(), templateParams);

		return html;
	};
	
})();
