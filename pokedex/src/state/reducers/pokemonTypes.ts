import { ActionType } from '../action-types';
import { ActionPokemonTypes } from '../actions';

const reducer = (state: string[] = [], action: ActionPokemonTypes) => {
  switch (action.type) {
    case ActionType.SET_POKEMON_TYPES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
