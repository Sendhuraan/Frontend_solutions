import { ADD_PORNSTAR, DELETE_PORNSTAR } from '../constants/action-types';

export const addPornstar = (name, aliasNames) => {
	return {
		type: ADD_PORNSTAR,
		payload: {
			name: name,
			alias_names: aliasNames
		}
	};
};

export const deletePornstar = (id) => {
	return {
		type: DELETE_PORNSTAR,
		payload: {
			id
		}
	};
};
