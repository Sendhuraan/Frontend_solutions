'use strict';

(function() {

	var assert = require('chai').assert;

	describe('TODO: Lexical Scope', function() {

		/* eslint-disable no-unused-vars */
		var teacher = 'Kyle';

		function otherClass() {
			var teacher = 'Suzy';

			function ask(question) {
				console.log(teacher, question);
			}

			ask('Why?');
		}
		
		/* eslint-enable no-unused-vars */

		it('TODO: Lexical Scope', function() {
			assert.equal('TODO', 'TODO');
		});

	});
	
})();
