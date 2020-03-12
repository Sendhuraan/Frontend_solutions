import React, { Component } from 'react';

import Header from '../Header';
import Content from '../Content';
import ShieldFromXSS from '../ShieldFromXSS';
import Footer from '../Footer';

import './index.css';

class App extends React.Component {

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'Prevent by removing XSS code manually and serialize';

		return (
			<div className='App'>
				<Header url={url} title={title} />

				<Content>
					<ShieldFromXSS />
				</Content>

				<Footer />
			</div>
		);
	}
}

export default App;
