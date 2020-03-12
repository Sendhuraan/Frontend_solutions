import 'bootstrap/dist/css/bootstrap.min.css';

(function() {
	
	var userForm = document.getElementById('user-form');

	userForm.addEventListener('submit', function(e) {
		e.preventDefault();

		var formElement = this;
		document.body.innerHTML = '';

		var formData = Object.keys(formElement).reduce(function(dataObj, child) {

			if(formElement[child].name) {
				dataObj[formElement[child].name] = formElement[child].value;
			}
			return dataObj;

		}, {});

		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(formData));

		xhr.addEventListener('load', function() {
			var response;

			try {
				response = JSON.parse(this.response);
			}
			catch(err) {
				response = {
					error: 'Mangled response'
				};
			}

			document.body.innerHTML = response.error
									? response.error
									: `You posted ${JSON.stringify(response.data.value)}`;

		});

	});

})();
