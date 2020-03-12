import React, { Component } from 'react';

import Header from '../Header';
import Content from '../Content';
import TodoForm from '../TodoForm';
import TodoItems from '../TodoItems';
import Footer from '../Footer';

import './index.css';

class App extends Component {

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'Todo List (React and Redux)';

		return (
			<div className='App'>
				<Header url={url} title={title} />

				<Content>
					<TodoForm />
					<TodoItems />
				</Content>

				<Footer />
			</div>
		);
	}
}

export default App;
