import 'bootstrap/dist/css/bootstrap.min.css';

(function() {

	var fieldName = 'user_photo';
	var field = document.querySelector(`[name=${fieldName}]`);
	var userForm = document.getElementById('user_form');
	var uploadStatus = document.getElementById('upload_status');

	var file;
	field.addEventListener('change', function() {
		file = this.files[0];
	});

	userForm.addEventListener('submit', function(e) {
		e.preventDefault();

		if(!file) {
			return false;
		}
		else {
			var xhr = new XMLHttpRequest();
			xhr.file = file;
			xhr.open('put', window.location, true);
			xhr.setRequestHeader('x-field', fieldName);
			xhr.setRequestHeader('x-filename', file.fileName || file.name);
			xhr.onload = updateStatus;
			xhr.send(file);
			file = '';
			userForm.reset();
		}
	});

	function updateStatus() {
		uploadStatus.innerHTML = `${
									(this.status === 200) 
									? this.response
									: `${this.status}: ${this.response}`
								}`;
	}
	
})();
