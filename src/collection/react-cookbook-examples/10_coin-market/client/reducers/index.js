import { combineReducers } from 'redux';

import coins from './coins-reducer';

const rootReducer = combineReducers({
	coins
});

export default rootReducer;
