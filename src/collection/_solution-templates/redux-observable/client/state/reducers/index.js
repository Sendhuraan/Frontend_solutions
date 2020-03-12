import { combineReducers } from 'redux';

import todoReducer from './todo-reducer';

const rootReducer = combineReducers({
	todos: todoReducer
});

export default rootReducer;
