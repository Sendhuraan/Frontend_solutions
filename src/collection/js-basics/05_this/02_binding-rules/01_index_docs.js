/* eslint-disable strict */

(function() {

	var assert = require('chai').assert;

	var nullFunction = function() {};

	describe('Implicit Binding (object.method)', function() {
		'use strict';

		var workshop = {
			teacher: 'Kyle',
			ask(question) {
				console.log(this.teacher, question);
			}
		};

		workshop.ask('What is Implicit Binding');

		it('TODO: Implicit Binding', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('Implicit Binding (Dynamic Sharing)', function() {
		'use strict';

		function ask(question) {
			console.log(this.teacher, question);
		}

		var workshop1 = {
			teacher: 'Kyle',
			ask: ask
		};

		var workshop2 = {
			teacher: 'Suzy',
			ask: ask
		};

		workshop1.ask('How do I share a method');
		workshop2.ask('How do I share a method');

		it('TODO: Implicit Binding (Dynamic Sharing)', function() {
			assert.equal('TODO', 'TODO');
		});

	});

	describe('Explicit Binding (call and apply)', function() {
		'use strict';

		function ask(question) {
			console.log(this.teacher, question);
		}

		var workshop1 = {
			teacher: 'Kyle'
		};

		var workshop2 = {
			teacher: 'Suzy'
		};

		ask.call(workshop1, 'Can I explicitly set context');
		ask.call(workshop2, 'Can I explicitly set context');
		
		it('TODO: Explicit Binding (call and apply)', nullFunction);

	});

	describe('Hard binding (bind)', function() {
		'use strict';

		var workshop = {
			teacher: 'Kyle',
			ask(question) {
				console.log(this.teacher, question);
			}
		};

		setTimeout(workshop.ask, 10, 'Lost this?');

		//fix
		setTimeout(workshop.ask.bind(workshop), 10, 'Hard bound this?');

		it('TODO: Hard binding (bind)', nullFunction);

	});

	describe('new binding (new)', function() {
		'use strict';

		/* eslint-disable no-unused-vars, new-cap */
		function ask(question) {
			console.log(this.teacher, question);
		}

		var newEmptyObject = new ask('What is \'new\' doing here?');

		/* eslint-enable no-unused-vars, new-cap */

		it('Below, are the steps that happens when the function is called with new keyword', nullFunction);

		it('Create a brand new empty object.', nullFunction);

		it('Link that object to another object.', nullFunction);

		it('Call function with this set to the new object.', nullFunction);

		it('If the function does not return an object, assume return of this.', nullFunction);

	});

	describe('Default binding', function() {

		/* eslint-disable no-inner-declarations, no-unused-vars */
		try {
			var teacher = 'Kyle';

			function ask(question) {
				console.log(this.teacher, question);
				console.log(this);
			}

			function askAgain(question) {
				'use strict';
				console.log(this.teacher, question);
			}

			ask('What\'s the non-strict mode default?');
			askAgain('What\'s the strict mode default?');
		}
		catch(err) {
			console.log(err.name, err.message);
			//console.error(err);
		}

		/* eslint-enable no-inner-declarations, no-unused-vars */

		it('The default binding rule is one of the trickiest rule, but a simple one', nullFunction);

		it('It states, if all of the above (implicit, explicit, hard, new) binding does not apply, the default binding rule applies.', nullFunction);

		it('It states, In non-strict mode, \'this\' points to the top level object (window object in browser & global object in node.js)', nullFunction);

		it('It states, In strict mode, \'this\' points to undefined. If we try to access the property on \'undefined\', it results in TypeError.', nullFunction);

		it('In the above example, \'teacher\' variable is scoped to the describe block function. When we call ask function, in non-strict mode, this points to top level object. It searches for variable teacher in top level object and it will not find it and logs \'undefined What\'s the non-strict mode default?\'', nullFunction);

		it('In the next line, we print the top level object directly. we get node\'s global object.', nullFunction);

		it('When askAgain is called, which is in strict mode, this points to undefined. When the teacher variable is referenced on undefined, it results in TypeError', nullFunction);

	});

	describe('Binding rules precedence (code)', function() {
		
		/* eslint-disable no-undef, no-unused-vars, new-cap, no-inner-declarations */
		try {
			function something() {
				this.hello = 'hello';
				console.log(this.hello, this.who);
			}

			var who = 'global';
			var foobar;
			var bazbam;
			var obj1 = {
				who: 'obj1',
				something: something
			};
			var obj2 = {
				who: 'obj2'
			};

			// default binding
			something();
			console.log(hello);

			// implicit binding
			obj1.something();
			console.log(obj1.hello);

			// explicit binding
			obj1.something.call(obj2);
			console.log(obj2.hello);

			// hard binding
			foobar = something.bind(obj2);
			foobar();
			foobar.call(obj1);

			// new binding
			bazbam = new something();
			console.log(bazbam.hello);

			bazbam = new obj1.something();
			bazbam = new foobar();
		}
		catch(err) {
			console.error(err);
		}
		
		/* eslint-enable no-undef, no-unused-vars, new-cap, no-inner-declarations */

		it('Code proving order of precedence', nullFunction);

	});

	describe('Binding rules precedence', function() {

		var workshop = {
			teacher: 'Kyle',
			ask: function ask(question) {
				console.log(this.teacher, question);
			}
		};

		new (workshop.ask.bind(workshop))('What does this do?');

		it('Binding rules apply in the following order', nullFunction);

		it('new binding', nullFunction);
		it('hard binding (bind)', nullFunction);
		it('explicit binding (call or apply)', nullFunction);
		it('implicit binding (object.method)', nullFunction);
		it('default binding (defaults to top level object except in strict mode)', nullFunction);

	});


	
})();
