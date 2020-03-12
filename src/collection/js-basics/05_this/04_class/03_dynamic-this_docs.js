'use strict';

(function() {

	var nullFunction = function() {};

	describe('Classes - Dynamic this behaviour', function() {

		it('Even though, we have the new class system, the workings of this remains same as before.', nullFunction);

	});

	describe('Classes - losing this in setTimeout', function() {

		class Workshop {
			constructor(teacher) {
				this.teacher = teacher;
			}
			ask(question) {
				console.log(this.teacher, question);
			}
		}

		var deepJS = new Workshop('Kyle');

		setTimeout(deepJS.ask, 100, 'Still losing \'this\'?');

		it('when we pass the function to the setTimeout function, we lose this as before.', nullFunction);

	});


	describe('Classes - fixing this in setTimeout', function() {

		class Workshop {
			constructor(teacher) {
				this.teacher = teacher;
				this.ask = (question) => {
					console.log(this.teacher, question);
				};
			}
		}

		var deepJS = new Workshop('Kyle');

		setTimeout(deepJS.ask, 100, 'Is \'this\' fixed?');

		it('We fixed this by using hard bound function before.', nullFunction);

		it('We could achieve the same with lexical this arrow function inside constructor function.', nullFunction);

	});
	
})();
