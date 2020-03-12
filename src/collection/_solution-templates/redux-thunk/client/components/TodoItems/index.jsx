import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo, deleteTodo } from '../../state/actions/todo-actions';

import './index.css';

function TodoItems(props) {
	const { todos } = props;

	return (
		<div className='TodoItems'>
			<ul>
				{
					todos.map(function(todo) {

						return (
							<li key={todo.id} className={`${todo.completed ? 'completed' : 'pending'}`}>
							{todo.title}
								<div className='actions'>
									<span
										className={todo.completed ? 'hide' : 'done'}
										onClick={() => props.toggleTodo(todo.id)}
									>
										<i className='fa fa-check'></i>
									</span>

									<span
										className='trash'
										onClick={() => props.deleteTodo(todo.id)}
									>
										<i className='fa fa-trash'></i>
									</span>
								</div>
							</li>
						);
					
					})
				}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	};
}

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoItems);
