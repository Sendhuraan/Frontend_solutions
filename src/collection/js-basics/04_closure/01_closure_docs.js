'use strict';

(function() {

	var assert = require('chai').assert;

	var nullFunction = function() {};

	describe('TODO: Closure', function() {

		function ask(question) {
			setTimeout(function waitASec() {
				console.log(question);
			});
		}

		ask('What is Closure?');

		it('Closure is when a function remembers its lexical scope even when the function is executed outside that lexical scope', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('TODO: Closure variable assignment', function() {

		function ask(question) {
			return function holdYourQuestion() {
				console.log(question);
			};
		}

		var myQuestion = ask('What is Closure?');

		myQuestion();

	});

	describe('TODO: Closure - Not capturing a value, but closing over variable', function() {

		var teacher = 'Kyle';

		var myTeacher = function() {
			console.log(teacher);
		};

		teacher = 'Suzy';  

		myTeacher();  // Suzy
		
		it('In the above example, we are not closing over the value teacher had. But, we are closing over the variable teacher. So when the variable is changes, it gives \'Suzy\'', nullFunction);

	});

	describe('Closure in loops', function() {

		/* eslint-disable no-loop-func */
		for (var i=1; i <= 3; i++) {
			setTimeout(function() {
				console.log(`i: ${i}`);
			}, i*10);
		}

		/* eslint-enable no-loop-func */

		it('In this example, we are trying to create three different \'i\' values. If we are in the mindset that we are closing over values, we would be completely wrong. It is fundamentally closed over the variable i, So when we print the value, the loop had already finished and current value is 4 (and not 3)', nullFunction);

	});

	describe('Solving closure problems with let in for loop', function() {

		for (let i=1; i <= 3; i++) {
			setTimeout(function() {
				console.log(`i: ${i}`);
			}, i*10);
		}

		it('Here, if we replace the var with let, it automatically works. As let is block scoped and it creates new scopes for each iteration, when the variable is closed over, it remembers the lexical environment and that environment had the corresponding i value', nullFunction);

	});
	
})();
