import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes/index.jsx';
import configureStore from './store';

import './index.css';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<AppRoutes />
		</Router>
	</Provider>,
	document.getElementById('app')
);
