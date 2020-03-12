import React, { Component } from 'react';

import Header from '../Header';
import Content from '../Content';
import Todo from '../Todo';
import Footer from '../Footer';

import './index.css';

class App extends React.Component {

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'Todo List';

		return (
			<div className='App'>
				{/* Passing props into component */}
				<Header url={url} title={title} />

				<Content>
					{/* Passing component as children */}
					<Todo />

				</Content>

				<Footer />
			</div>
		);
	}
}

export default App;
