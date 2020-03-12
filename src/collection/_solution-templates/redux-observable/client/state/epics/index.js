import { combineEpics } from 'redux-observable';

import { fetchTodosEpic } from './todo-epics';

const rootEpic = combineEpics(fetchTodosEpic);

export default rootEpic;
