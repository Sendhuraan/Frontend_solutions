import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

(function() {

	function drawDiagonal_byPenMovement() {
		var canvas = document.getElementById('canvas-1');
		var context = canvas.getContext('2d');

		context.beginPath();
		context.moveTo(70, 140);
		context.lineTo(140, 70);

		context.stroke();
	}

	function drawDiagonal_byCanvasTransformation() {
		var canvas = document.getElementById('canvas-2');
		var context = canvas.getContext('2d');

		// save the current canvas
		context.save();

		// transform the canvas
		context.translate(70, 140);

		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(70, -70);

		context.stroke();

		// restore to it's original state
		context.restore();
	}
	
	drawDiagonal_byPenMovement();
	drawDiagonal_byCanvasTransformation();

})();
