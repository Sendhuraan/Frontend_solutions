import {
	FETCH_COINS_SUCCESS

} from '../constants/action-types';

import { getNewState } from '../utilities';

const initialState = {
	coins: []
};

export default function coinsReducer(state = initialState, action) {
	
	switch(action.type) {
		case FETCH_COINS_SUCCESS:
			var { coins } = action.payload;

			return getNewState(state, { coins });
			break;

		default:
			return state;
			break; 
	}

}
