import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

import './index.css';

class App extends React.Component {

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'Redux Basic';

		return (
			<div className='App'>
				<Header url={url} title={title} />

				<Content>
					{this.props.children}
				</Content>

				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object
};

export default App;
