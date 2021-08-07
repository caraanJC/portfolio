import { ActionType } from '../action-types';
import { ActionSearchWord } from '../actions';

const reducer = (state = '', action: ActionSearchWord) => {
  switch (action.type) {
    case ActionType.SET_SEARCH_WORD:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
