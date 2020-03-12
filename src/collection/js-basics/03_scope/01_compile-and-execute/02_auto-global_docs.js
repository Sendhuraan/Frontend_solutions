/* eslint-disable strict */

(function() {

	var assert = require('chai').assert;

	describe('TODO: Auto Globals - Example1', function() {

		/* eslint-disable no-unused-vars, no-implicit-globals, no-undef, no-inner-declarations */
		try {
			function autoGlobal_NonStrict() {

				var teacher = 'Kyle';

				function otherClass() {
					teacher = 'Suzy';
					topic = 'React';
					console.log('Welcome!');
				}

				otherClass();
				
				console.log(teacher);
				console.log(topic);
			}

			function autoGlobal_Strict() {
				'use strict';

				var teacher = 'Kyle';

				function otherClass() {
					teacher = 'Suzy';
					topic = 'React';
					console.log('Welcome!');
				}

				otherClass();
				
				console.log(teacher);
				console.log(topic);
			}

			autoGlobal_NonStrict();
			autoGlobal_Strict();	
		}
		catch(err) {
			console.error(err);
		}
		
		/* eslint-enable no-unused-vars, no-implicit-globals, no-undef, no-inner-declarations */

		it('TODO: Auto Globals - Example1', function() {
			assert.equal('TODO', 'TODO');
		});

	});


	describe('TODO: Auto Globals - Example2', function() {

		/* eslint-disable no-unused-vars, no-implicit-globals, no-undef, no-inner-declarations */
		try {
			function autoGlobal_NonStrict() {

				var foo = 'bar';

				function bar() {
					var foo = 'baz';

					function baz(foo) {
						foo = 'bam';
						bam = 'yay';
					}
					baz();
				}

				bar();
				foo;
				bam;
				baz();
			}

			function autoGlobal_Strict() {
				'use strict';

				var foo = 'bar';

				function bar() {
					var foo = 'baz';

					function baz(foo) {
						foo = 'bam';
						bam = 'yay';
					}
					baz();
				}

				bar();
				foo;
				bam;
				baz();
			}

			autoGlobal_NonStrict();
			autoGlobal_Strict();	
		}
		catch(err) {
			console.error(err);
		}
		
		/* eslint-enable no-unused-vars, no-implicit-globals, no-undef, no-inner-declarations */

		it('TODO: Auto Globals - Example2', function() {
			assert.equal('TODO', 'TODO');
		});

	});
	
})();
