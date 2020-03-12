'use strict';

(function() {

	var nullFunction = function() {};

	describe('Class - Relative polymorphism', function() {

		class Workshop {
			constructor(teacher) {
				this.teacher = teacher;
			}
			ask(question) {
				console.log(this.teacher, question);
			}
		}

		class AnotherWorkshop extends Workshop {
			ask(msg) {
				super.ask(msg.toUpperCase());
			}
		}

		var JSRecentParts = new AnotherWorkshop('Kyle');

		JSRecentParts.ask('Are classes super?');

		it('Relative polymorphism is overriding the same method in parent in child classes. It is called shadowing.', nullFunction);

		it('We should use super.methodName() to call a method that is in the parent class.', nullFunction);

	});
	
})();
