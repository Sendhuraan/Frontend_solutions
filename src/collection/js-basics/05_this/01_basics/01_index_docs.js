'use strict';

(function() {

	var assert = require('chai').assert;

	describe('Dynamic context', function() {

		function ask(question) {
			console.log(this.teacher, question);
		}

		function otherClass() {
			var myContext = {
				teacher: 'Suzy'
			};

			ask.call(myContext, 'Why?');
		}

		otherClass();

		it('TODO: Dynamic context', function() {
			assert.equal('TODO', 'TODO');
		});

	});
	
})();
