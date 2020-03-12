'use strict';

(function() {

	var nullFunction = function() {};

	describe('Lexical this', function() {

		var workshop = {
			teacher: 'Kyle',
			ask(question) {
				setTimeout(() => {
					console.log(this.teacher, question);
				}, 100);
			}
		};

		workshop.ask('Is this lexical \'this\'?');

		it('In the above example, we have an arrow function and this keyword inside the function.', nullFunction);

		it('Arrow functions don\'t define this behavior as in regular functions. This means that the this act as a regular variable inside of the function.', nullFunction);

		it('By which, the \'this\' resolves lexically in terms of scope, as a normal variable', nullFunction);

		it('when the ask function is called, \'this.teacher\' variable reference is not found inside setTimeout function. so, it moves one level up lexically, as a normal variable.', nullFunction);

		it('Now, inside of ask function, it searches for \'this.teacher\' reference. As we have called the ask function as \'workshop.ask\', implicit binding takes over, and this now points at \'workshop\' object. Hence we get the \'this.teacher\' as \'Kyle\'', nullFunction);

	});


	describe('Arrow function - this confusion', function() {

		var workshop = {
			teacher: 'Kyle',
			ask: (question) => {
				console.log(this.teacher, question);
			}
		};

		workshop.ask('What happened to \'this\'?');
		workshop.ask.call(workshop, 'Still no \'this\'?');

		it('In the above example, we have an arrow function and this keyword inside the function.', nullFunction);

		it('when we call the ask function, ', nullFunction);

		it('when the ask function is called, \'this.teacher\' variable reference is not found inside ask function. so, it moves one level up lexically, as a normal variable.', nullFunction);

		it('Now, we move one level up ending up in describe block function, and then to the global scope. We could be tricked into believing that workshop object is scope. but it isn\'t. So we don\'t get \'this.teacher\' reference and get undefined.', nullFunction);

		it('Even when we call the ask function with call and set explicitly to the workshop object, we still get undefined, because it does not follow dynamic this behavior. Arrow functions\' this follows lexical behavior (Important).', nullFunction);

	});


	describe('When to use arrow functions', function() {

		it('Only use arrow functions, when you need to use lexical this behavior', nullFunction);

	});
	
})();
