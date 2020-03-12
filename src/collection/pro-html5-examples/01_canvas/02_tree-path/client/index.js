import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

(function() {

	function drawTreePath(context) {
		context.beginPath();

		context.moveTo(-25, -50);
		context.lineTo(-10, -80);
		context.lineTo(-20, -80);
		context.lineTo(-5, -110);
		context.lineTo(-15, -110);

		context.lineTo(0, -140);

		context.lineTo(15, -110);
		context.lineTo(5, -110);
		context.lineTo(20, -80);
		context.lineTo(10, -80);
		context.lineTo(25, -50);

		context.closePath();

		context.stroke();
	}

	function drawTrails() {
		var canvas = document.getElementById('canvas-1');
		var context = canvas.getContext('2d');

		context.save();
		context.translate(130, 250);

		drawTreePath(context);

		context.stroke();
		context.restore();
	}
	
	drawTrails();

})();
