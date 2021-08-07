import { combineReducers } from 'redux';
import pokedex from './pokedex';
import pokemonTypes from './pokemonTypes';
import selectedType from './selectedType';
import searchWord from './searchWord';
import selectedPokemon from './selectedPokemon';

const reducers = combineReducers({
  pokedex,
  pokemonTypes,
  selectedType,
  searchWord,
  selectedPokemon,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
