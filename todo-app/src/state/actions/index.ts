import { ActionType } from '../action-types';

interface AddToTasks {
  type: ActionType.ADD_TO_TASKS;
  payload: {
    id: string;
    name: string;
    status: string;
  };
}

interface RemoveFromTasks {
  type: ActionType.REMOVE_FROM_TASKS;
  payload: string;
}

interface ChangeStatusToDone {
  type: ActionType.CHANGE_STATUS_TO_DONE;
  payload: string;
}

export type ActionTasks = AddToTasks | RemoveFromTasks | ChangeStatusToDone;
