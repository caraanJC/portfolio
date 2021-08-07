import { ActionType } from '../action-types';

interface AddPokemonToPokedex {
  type: ActionType.ADD_POKEMON_TO_POKEDEX;
  payload: {
    name: string;
    ntnlnum: string;
    img: string;
    types: string[];
    Description: string;
  };
}

interface ResetPokedex {
  type: ActionType.RESET_POKEDEX;
}

interface SetPokemontypes {
  type: ActionType.SET_POKEMON_TYPES;
  payload: string[];
}

interface SetSelectedType {
  type: ActionType.SET_SELECTED_TYPE;
  payload: string;
}

interface SetSearchWord {
  type: ActionType.SET_SEARCH_WORD;
  payload: string;
}

interface SetSelectedPokemon {
  type: ActionType.SET_SELECTED_POKEMON;
  payload: {
    name: string;
    ntnlnum: string;
    img: string;
    types: string[];
    Description: string;
  };
}

export type ActionPokedex = AddPokemonToPokedex | ResetPokedex;
export type ActionPokemonTypes = SetPokemontypes;
export type ActionSelectedType = SetSelectedType;
export type ActionSearchWord = SetSearchWord;
export type ActionSelectedPokemon = SetSelectedPokemon;
