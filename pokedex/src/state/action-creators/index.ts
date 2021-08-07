import { Dispatch } from 'react';
import { ActionType } from '../action-types';
import {
  ActionPokedex,
  ActionPokemonTypes,
  ActionSearchWord,
  ActionSelectedPokemon,
  ActionSelectedType,
} from '../actions';

const setPokemonTypes = (pokemonTypes: string[]) => {
  return (dispatch: Dispatch<ActionPokemonTypes>) => {
    dispatch({
      type: ActionType.SET_POKEMON_TYPES,
      payload: pokemonTypes,
    });
  };
};

const setSelectedType = (selectedType: string) => {
  return (dispatch: Dispatch<ActionSelectedType>) => {
    dispatch({
      type: ActionType.SET_SELECTED_TYPE,
      payload: selectedType,
    });
  };
};

const setSearchWord = (searchWord: string) => {
  return (dispatch: Dispatch<ActionSearchWord>) => {
    dispatch({
      type: ActionType.SET_SEARCH_WORD,
      payload: searchWord,
    });
  };
};

interface IParams {
  pokedex: {
    name: string;
    ntnlnum: string;
    img: string;
    types: string[];
    Description: string;
  }[];
  pokemon: {
    name: string;
    ntnlnum: string;
    img: string;
    types: string[];
    Description: string;
  };
  urls: { name: string; url: string }[];
}

const setSelectedPokemon = (pokemon: IParams['pokemon']) => {
  return (dispatch: Dispatch<ActionSelectedPokemon>) => {
    dispatch({
      type: ActionType.SET_SELECTED_POKEMON,
      payload: pokemon,
    });
  };
};

const addPokemonToPokedex = (pokemon: IParams['pokemon']) => {
  return (dispatch: Dispatch<ActionPokedex>) => {
    dispatch({
      type: ActionType.ADD_POKEMON_TO_POKEDEX,
      payload: pokemon,
    });
  };
};

const resetPokedex = () => {
  return (dispatch: Dispatch<ActionPokedex>) => {
    dispatch({
      type: ActionType.RESET_POKEDEX,
    });
  };
};

export {
  setPokemonTypes,
  setSelectedType,
  setSearchWord,
  setSelectedPokemon,
  addPokemonToPokedex,
  resetPokedex,
};
