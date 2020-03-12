import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../state/actions/todo-actions';

import './index.css';

class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todo: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			todo: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo(this.state.todo);
		this.setState({
			todo: ''
		});
	}

	render() {
		return (
			<div className='TodoForm'>
				<h1>Add Task:</h1>

				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						value={this.state.todo}
						name='todo'
						onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}

export default connect(null, { addTodo })(TodoForm);
