import { ActionType } from '../action-types';
import { ActionSelectedPokemon } from '../actions';

const reducer = (state = {}, action: ActionSelectedPokemon) => {
  switch (action.type) {
    case ActionType.SET_SELECTED_POKEMON:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
