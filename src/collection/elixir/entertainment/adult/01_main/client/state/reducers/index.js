import { combineReducers } from 'redux';

import pornstarReducer from './pornstar-reducer';

const rootReducer = combineReducers({
	pornstars: pornstarReducer
});

export default rootReducer;
