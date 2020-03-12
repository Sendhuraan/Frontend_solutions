import { SET_USER } from '../constants/action-types';

function userReducer(state = {}, action) {
	switch (action.type) {
		case SET_USER:
			return apply_setUser(state, action);
			break;

		default:
			return state;
			break;
	}
}

function apply_setUser(state, action) {
	return action.payload.userDetails;
}

export default userReducer;
