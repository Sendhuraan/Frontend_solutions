import './index.css';

(function() {

	var canvas = document.querySelector('#canvas');
	var context = canvas.getContext('2d');

	context.fillStyle = 'red';
	context.fillRect(10, 10, 100, 100);

	context.fillStyle = 'blue';
	context.fillRect(100, 100, 50, 50);
	
})();
