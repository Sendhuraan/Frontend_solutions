'use strict';

(function() {

	var nullFunction = function() {};

	describe('Class', function() {

		/*
		function Workshop {
			this.teacher = teacher;
		}

		Workshop.prototype.ask = function(question) {
			console.log(this.teacher, question);
		}

		var deepJS = new Workshop('Kyle');
		var reactJS = new Workshop('Suzy');

		deepJS.ask('Is \'class\' a class?');
		reactJS.ask('Is this class okay?');
		*/

		class Workshop {
			constructor(teacher) {
				this.teacher = teacher;
			}
			ask(question) {
				console.log(this.teacher, question);
			}
		}

		var deepJS = new Workshop('Kyle');
		var reactJS = new Workshop('Suzy');

		deepJS.ask('Is \'class\' a class?');
		reactJS.ask('Is this class okay?');

		it('We could the same type of this behaviour with class system in javascript like we do in functions', nullFunction);

		it('It is similar to function version (commented), except that we could define a constructor and prototype methods with class keyword block', nullFunction);

	});


	describe('Class inheritance', function() {

		class Workshop {
			constructor(teacher) {
				this.teacher = teacher;
			}
			ask(question) {
				console.log(this.teacher, question);
			}
		}

		class AnotherWorkshop extends Workshop {
			speakup(msg) {
				this.ask(msg);
			}
		}

		var JSRecentParts = new AnotherWorkshop('Kyle');

		JSRecentParts.speakup('Are classes getting better?');

		it('TODO: Class inheritance', nullFunction);

	});
	
})();
