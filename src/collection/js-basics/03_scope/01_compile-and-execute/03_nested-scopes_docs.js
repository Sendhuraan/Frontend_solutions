'use strict';

(function() {

	var assert = require('chai').assert;

	describe('TODO: Nested Scopes', function() {

		/* eslint-disable no-undef, no-inner-declarations */
		try {
			function otherClass() {
				var teacher = 'Suzy';

				function ask(question) {
					console.log(teacher, question);
				}

				ask('Why?');
			}

			otherClass();
			ask('????');
		}
		catch(err) {
			console.error(err);
		}
		
		/* eslint-enable no-undef, no-inner-declarations */

		it('TODO: Nested Scopes', function() {
			assert.equal('TODO', 'TODO');
		});

	});
	
})();
