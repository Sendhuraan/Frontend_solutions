import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	SET_TODOS

} from '../constants/action-types';

import { generateUniqueID } from '../utilities';

function todoReducer(state = [], action) {
	switch(action.type) {
		case SET_TODOS:
			return apply_setTodos(state, action);
			break;

		case ADD_TODO:
			return apply_addTodo(state, action);
			break;

		case TOGGLE_TODO:
			return apply_toggleTodo(state, action);
			break;

		case DELETE_TODO:
			return apply_deleteTodo(state, action);
			break;

		default:
			return state;
			break;
	}
}

function apply_addTodo(state, action) {
	let newState = [...state];

	let newTodo = {
		id: generateUniqueID(),
		title: action.payload.name,
		completed: false
	};

	newState.push(newTodo);

	return newState;
}

function apply_toggleTodo(state, action) {
	let { id } = action.payload;
	let newState = [...state];

	let todoToggled = newState.map(function(todo) {
		if(todo.id === id) {
			todo.completed = !todo.completed;
			return todo;
		}
		else {
			return todo;
		}
	});

	newState = todoToggled;

	return newState;
}

function apply_deleteTodo(state, action) {
	let { id } = action.payload;
	let newState = [...state];

	let todoDeleted = newState.filter(function(todo) {
		return (todo.id !== id);
	});

	newState = todoDeleted;

	return newState;
}

function apply_setTodos(state, action) {
	return action.payload.todos;
}

export default todoReducer;
