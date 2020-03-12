import { combineEpics } from 'redux-observable';

import { fetchTodosEpic } from './todo-epics';
import { fetchUserEpic } from './user-epic';

const rootEpic = combineEpics(fetchUserEpic);

export default rootEpic;
