import { combineReducers } from 'redux';

import todoReducer from './todo-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
	todos: todoReducer,
	user: userReducer
});

export default rootReducer;
