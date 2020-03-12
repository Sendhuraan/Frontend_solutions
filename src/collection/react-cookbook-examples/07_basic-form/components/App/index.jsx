import React, { Component } from 'react';

import Header from '../Header';
import Content from '../Content';
import GetPersonInfo from '../GetPersonInfo';
import Footer from '../Footer';

import './index.css';

class App extends Component {

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'Get Person Info';

		return (
			<div className='App'>
				<Header url={url} title={title} />

				<Content>
					<GetPersonInfo />
				</Content>

				<Footer />
			</div>
		);
	}
}

export default App;
