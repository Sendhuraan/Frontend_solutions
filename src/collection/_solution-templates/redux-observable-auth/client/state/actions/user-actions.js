import { GET_USER, SET_USER } from '../constants/action-types';

function getUser(username, password) {
	return {
		type: GET_USER,
		payload: {
			username,
			password
		}
	};
}

function setUser(userDetails) {
	return {
		type: SET_USER,
		payload: {
			userDetails
		}
	};
}

export { getUser, setUser };
