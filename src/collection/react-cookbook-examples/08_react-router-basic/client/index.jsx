import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes/index.jsx';

import './index.css';

ReactDOM.render(
	<Router>
		<AppRoutes />
	</Router>,
	document.getElementById('app')
);
