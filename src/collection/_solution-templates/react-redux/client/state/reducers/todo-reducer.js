import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants/action-types';
import { generateUniqueID } from '../utilities';

const initialState = [
	{
		id: generateUniqueID(),
		name: 'Watch GOT',
		completed: false
	},
	{
		id: generateUniqueID(),
		name: 'Read War and Peace',
		completed: false
	}
];

function todoReducer(state = initialState, action) {
	switch(action.type) {
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
		name: action.payload.name,
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

export default todoReducer;
