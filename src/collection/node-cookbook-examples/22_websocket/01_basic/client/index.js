import 'bootstrap/dist/css/bootstrap.min.css';

(function() {

	var ws = new WebSocket('ws://localhost:3000');
	var output = document.getElementById('output');
	var send = document.getElementById('send');

	function log (event, msg) { 
		return '<div>' + event + ': ' + msg + '</div>'; 
	}

	send.addEventListener('click', function () { 
		var msg = document.getElementById('msg').value;
		ws.send(msg);
		output.innerHTML += log('Sent', msg);
	});

	ws.onmessage = function (e) { 
		output.innerHTML += log('Received', e.data);
	};

	ws.onclose = function (e) { 
		output.innerHTML += log('Disconnected', e.code + '-' + e.type);
	};

	ws.onerror = function (e) { 
		output.innerHTML += log('Error', e.data);
	};
	
})();
