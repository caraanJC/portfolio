import { ActionType } from '../action-types';
import { ActionPokedex } from '../actions';

import pokedex from '../../assets/pokemon.json';

const initialState = pokedex.pokemons;

const reducer = (state = initialState, action: ActionPokedex) => {
  switch (action.type) {
    case ActionType.ADD_POKEMON_TO_POKEDEX:
      return [...state, action.payload];
    case ActionType.RESET_POKEDEX:
      return [];
    default:
      return state;
  }
};

export default reducer;
