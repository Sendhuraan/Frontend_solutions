import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	GET_TODOS,
	SET_TODOS
} from '../constants/action-types';

function addTodo(todoName) {
	return {
		type: ADD_TODO,
		payload: {
			name: todoName
		}
	};
}

function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		payload: {
			id
		}
	};
}

function deleteTodo(id) {
	return {
		type: DELETE_TODO,
		payload: {
			id
		}
	};
}

function getTodos() {
	return {
		type: GET_TODOS,
		payload: {}
	};
}

function setTodos(todos) {
	return {
		type: SET_TODOS,
		payload: {
			todos
		}
	};
}

export { addTodo, toggleTodo, deleteTodo, getTodos, setTodos };
