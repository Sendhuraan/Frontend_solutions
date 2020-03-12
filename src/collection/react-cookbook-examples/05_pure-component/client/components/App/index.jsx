import React, { Component } from 'react';

import Header from '../Header';
import Content from '../Content';
import Summation from '../Summation';
import Footer from '../Footer';

import './index.css';

class App extends React.Component {

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'Pure Component';

		return (
			<div className='App'>
				<Header url={url} title={title} />

				<Content>
					<Summation />
				</Content>

				<Footer />
			</div>
		);
	}
}

export default App;
