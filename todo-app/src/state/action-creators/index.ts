import { Dispatch } from 'redux';
import { ActionType } from '../action-types';

import { ActionTasks } from '../actions';

interface IParams {
  task: {
    id: string;
    name: string;
    status: string;
  };
}

const addToTasks = (task: IParams['task']) => {
  return (dispatch: Dispatch<ActionTasks>) => {
    dispatch({
      type: ActionType.ADD_TO_TASKS,
      payload: task,
    });
  };
};

const removeFromTasks = (taskID: string) => {
  return (dispatch: Dispatch<ActionTasks>) => {
    dispatch({
      type: ActionType.REMOVE_FROM_TASKS,
      payload: taskID,
    });
  };
};

const changeStatusToDone = (taskID: string) => {
  return (dispatch: Dispatch<ActionTasks>) => {
    dispatch({
      type: ActionType.CHANGE_STATUS_TO_DONE,
      payload: taskID,
    });
  };
};

export { addToTasks, removeFromTasks, changeStatusToDone };
