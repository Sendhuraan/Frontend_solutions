import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'regenerator-runtime/runtime';

import Header from '../Header';
import Content from '../Content';
import TodoForm from '../TodoForm';
import TodoItems from '../TodoItems';
import Footer from '../Footer';

import { getTodos } from '../../state/actions/todo-actions';

import './index.css';

class App extends Component {

	componentDidMount() {
		this.props.getTodos();
	}

	render() {
		const url = 'https://www.reactjs.org';
		const title = 'Todo List (React and Redux Thunk)';

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

export default connect(null, { getTodos })(App);
