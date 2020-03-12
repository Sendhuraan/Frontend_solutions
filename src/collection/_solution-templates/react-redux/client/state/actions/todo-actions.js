import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants/action-types';

export const addTodo = (todoName) => {
	return {
		type: ADD_TODO,
		payload: {
			name: todoName
		}
	};
};

export const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		payload: {
			id
		}
	};
};

export const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		payload: {
			id
		}
	};
};
