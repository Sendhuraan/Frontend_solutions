import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/index.jsx';
import store from './state/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

