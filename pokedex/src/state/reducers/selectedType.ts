import { ActionType } from '../action-types';
import { ActionSelectedType } from '../actions';

const reducer = (state = 'All', action: ActionSelectedType) => {
  switch (action.type) {
    case ActionType.SET_SELECTED_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
