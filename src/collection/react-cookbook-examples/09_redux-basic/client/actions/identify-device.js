import { SET_FILTER } from '../constants/action-types.js';

export const doSetFilter = (filter) => {
	return {
		type: SET_FILTER,
		payload: {
			filter
		}
	};
};
