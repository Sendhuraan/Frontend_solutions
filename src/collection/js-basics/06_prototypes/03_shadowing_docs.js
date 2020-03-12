'use strict';

(function() {

	var nullFunction = function() {};

	describe('Shadowing (override child methods)', function() {

		/*
		// Do not execute the code, as it infinite recursion.
		function Workshop {
			this.teacher = teacher;
		}

		Workshop.prototype.ask = function(question) {
			console.log(this.teacher, question);
		}

		var deepJS = new Workshop('Kyle');
		
		deepJS.ask = function(question) {
			this.ask(question.toUpperCase());
		};

		deepJS.ask('Oops, is this infinite recursion');
		*/

		it('When we try to shadowing, without knowing how the system works, it results in infinite recursion.', nullFunction);

	});


	describe('Fake polymorphism', function() {

		/* eslint-disable no-proto */
		function Workshop(teacher) {
			this.teacher = teacher;
		}

		Workshop.prototype.ask = function(question) {
			console.log(this.teacher, question);
		};

		var deepJS = new Workshop('Kyle');
		
		deepJS.ask = function(question) {
			// fixing infinite recursion
			this.__proto__.ask.call(this, question.toUpperCase());
		};

		deepJS.ask('Is this fake polymorphism');
		
		/* eslint-enable no-proto */

		it('We could override (shadowing) the ask function by directly executing the ask function by __proto__ and pass in our this context.', nullFunction);

		it('But these kind of solutions require us to do a hack. Eg: For going two levels up the chain -> we would have to write this.__proto__.__proto__', nullFunction);

		it('Instead we could use the class syntax relative polymorphism (super) to achieve this behaviour.', nullFunction);

	});
	
})();
