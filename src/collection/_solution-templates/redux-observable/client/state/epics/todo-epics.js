import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { GET_TODOS } from '../constants/action-types';
import { setTodos } from '../actions/todo-actions';

const todosURL = 'https://jsonplaceholder.typicode.com/todos';

function fetchTodos(url) {
	return ajax.getJSON(url);
}

function toTodos(response) {
	return setTodos(response);
}

function fetchTodosEpic(action$) {
	return action$.pipe(
		ofType(GET_TODOS),
		mergeMap(function fetchAndSetTodos() {
			return fetchTodos(todosURL).pipe(map(toTodos));
		})
	);
}

export { fetchTodosEpic };
