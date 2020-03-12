import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { GET_USER } from '../constants/action-types';
import { setUser } from '../actions/user-actions';

const loginURL = 'https://api.mockaroo.com/api/0a54f0b0?count=1&key=ce04d7c0';

function fetchAndSetUser(action) {
	let userRequest = ajax({
		url: loginURL,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			username: action.payload.username,
			password: action.payload.password
		}
	});

	return userRequest.pipe(map(toUser));
}

function toUser(response) {
	return setUser(response.response);
}

function fetchUserEpic(action$) {
	return action$.pipe(ofType(GET_USER), mergeMap(fetchAndSetUser));
}

export { fetchUserEpic };
