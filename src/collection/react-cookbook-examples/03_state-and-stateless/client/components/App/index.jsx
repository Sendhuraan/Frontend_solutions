import React, { Component } from 'react';

import Header from '../Header';
import Content from '../Content';
import Home from '../Home';
import Footer from '../Footer';

import './index.css';

class App extends React.Component {

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'State and Stateless';

		return (
			<div className='App'>
				{/* Passing props into component */}
				<Header url={url} title={title} />

				<Content>
					{/* Passing component as children */}
					<Home />

				</Content>

				<Footer />
			</div>
		);
	}
}

export default App;
