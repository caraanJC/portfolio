import { combineReducers } from 'redux';
import tasks from './tasks';

const reducers = combineReducers({
  tasks,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
