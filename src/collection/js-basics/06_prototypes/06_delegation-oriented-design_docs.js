'use strict';

(function() {

	var nullFunction = function() {};

	describe('Delegation design pattern', function() {

		/*
		var AuthController = {
			authenticate() {
				server.authenticate(
					[this.username, this.password],
					this.handleResponse.bind(this)
				);
			},
			handleResponse(response) {
				if(!response.ok) {
					this.displayError(response.msg);
				}
			}
		};

		var LoginFormController = Object.create(AuthController);

		LoginFormController.onSubmit = function() {
			this.username = this.$username.val();
			this.password = this.$password.val();
			this.authenticate();
		};

		LoginFormController.displayError = function(msg) {
			alert(msg)
		};
		*/

		it('TODO: Delegation design pattern', nullFunction);

	});
	
})();
