import { ADD_PORNSTAR, DELETE_PORNSTAR } from '../constants/action-types';
import { generateUniqueID, getFromStorage, setToStorage, hasKeyInStorage } from '../utilities';

if(!hasKeyInStorage('pornstars')) {
	setToStorage('pornstars', []);
}

const initialState = getFromStorage('pornstars').map(function addUniqId(pornstar) {
	pornstar.id = generateUniqueID();
	return pornstar;
});

function pornstarReducer(state = initialState, action) {
	switch(action.type) {
		case ADD_PORNSTAR:
			return apply_addPornstar(state, action);
			break;

		case DELETE_PORNSTAR:
			return apply_deletePornstar(state, action);
			break;

		default:
			return state;
			break;
	}
}

function apply_addPornstar(state, action) {
	let newState = [...state];

	console.log(action.payload);

	let newTodo = {
		id: generateUniqueID(),
		name: action.payload.name,
		alias_names: action.payload.alias_names
	};

	newState.push(newTodo);
	setToStorage('pornstars', newState);

	return newState;
}

function apply_deletePornstar(state, action) {
	let { id } = action.payload;
	let newState = [...state];

	let todoDeleted = newState.filter(function(todo) {
		return (todo.id !== id);
	});

	newState = todoDeleted;
	setToStorage('pornstars', newState);

	return newState;
}

export default pornstarReducer;
