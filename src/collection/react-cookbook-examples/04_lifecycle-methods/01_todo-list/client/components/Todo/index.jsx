import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import List from '../List';

import './index.css';

class Todo extends Component {
	constructor() {
		super();

		this.handleOnChange = this.handleOnChange.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.markAsCompleted = this.markAsCompleted.bind(this);
		this.removeTask = this.removeTask.bind(this);

		// Initial state...
		this.state = {
			task: '',
			items: [
				{
					id: uuidv4(),
					task: 'Default Task 1',
					completed: false
				},
				{
					id: uuidv4(),
					task: 'Default Task 2',
					completed: true
				},
				{
					id: uuidv4(),
					task: 'Default Task 3',
					completed: false
				}
			]
		};
	}

	handleOnChange(e) {
		this.setState({
			task: e.target.value
		});
	}

	addTodo(e) {
		// Prevent default to avoid the actual form submit...
		e.preventDefault();

		// Once is submited we reset the task value and we push the new task to the items array.
		this.setState({
			task: '',
			items: [
				...this.state.items,
				{
					id: uuidv4(),
					task: this.state.task,
					completed: false
				}
			]
		});
	}

	markAsCompleted(id) {
		// Finding the task by id...
		const foundIndex = this.state.items.findIndex((task) => {
			return (task.id === id);
		});

		// Updating the state with the new updated task...
		this.setState(function(state) {
			var newState = Object.assign({}, state);

			newState.items[foundIndex].completed = true;

			return newState;
		});
	}

	removeTask(id) {
		// Filtering the tasks by removing the specific task id...
		const filteredTasks = this.state.items.filter((task) => {
			return (task.id !== id);
		});

		// Updating items state...
		this.setState({
			items: filteredTasks
		});
	}

	render() {
		return (
			<div className='Todo'>
				<h1>New Task:</h1>

				<form onSubmit={this.addTodo}>
					<input value={this.state.task} onChange={this.handleOnChange} />
				</form>

				<List
					items={this.state.items}
					markAsCompleted={this.markAsCompleted}
					removeTask={this.removeTask}
				>
				</List>
			</div>
		);
	}
}

export default Todo;
