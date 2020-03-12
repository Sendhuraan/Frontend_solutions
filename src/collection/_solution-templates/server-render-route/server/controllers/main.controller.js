import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../../client/components/App';


// Handle index actions
const main = (req, res) => {
	const context = { };

	const compiledApp = renderToString(
		<StaticRouter context={ context } location={ req.url }>
			<App />
		</StaticRouter>
	);

	res.writeHead( 200, { 'Content-Type': 'text/html' } );
	res.end(`
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset='utf-8'>
			<title>React SSR</title>
		</head>
		
		<body>
			<div id='root'>${compiledApp}</div>
			<script src='./bundle.js'></script>
		</body>
		</html>`
	);
};

export default {
	main
};
