import { ActionType } from '../action-types';
import { ActionTasks } from '../actions';

interface IState {
  tasks: {
    id: string;
    name: string;
    status: string;
  }[];
}

const reducer = (state: IState['tasks'] = [], action: ActionTasks) => {
  switch (action.type) {
    case ActionType.ADD_TO_TASKS:
      return [...state, action.payload];

    case ActionType.REMOVE_FROM_TASKS:
      return state.filter((task) => task.id !== action.payload);

    case ActionType.CHANGE_STATUS_TO_DONE:
      return state.map((task) => {
        if (task.id === action.payload) {
          task.status = 'Done';
        }
        return task;
      });

    default:
      return state;
  }
};

export default reducer;
