import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';

import '../styles/PokemonFilter.css';

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const { setSearchWord, setSelectedType } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const selectedType = useSelector((state: State) => state.selectedType);

  const pokemonTypes = useSelector((state: State) => state.pokemonTypes);
  const searchWord = useSelector((state: State) => state.searchWord);

  const buttonTypeClickHandler = (pokeType: string) => {
    setSelectedType(pokeType);
  };

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };
  return (
    <div className='pokemonFilter'>
      <input
        placeholder='Search'
        type='text'
        onChange={inputChangeHandler}
        value={searchWord}
        className='pokemonFilter__search'
      />
      <select
        className='pokemonFilter__select'
        value={selectedType}
        onChange={selectChangeHandler}
      >
        {[...pokemonTypes, 'All'].map((pokemonType) => (
          <option key={pokemonType} value={pokemonType}>
            {pokemonType}
          </option>
        ))}
      </select>

      <div className='pokemonFilter__buttons'>
        {pokemonTypes.map((pokemonType) => (
          <button
            onClick={() => buttonTypeClickHandler(pokemonType)}
            className={`pokemonFilter__button pokeTypeBtn ${pokemonType}`}
            key={pokemonType}
          >
            {pokemonType}
          </button>
        ))}
        <button
          onClick={() => buttonTypeClickHandler('All')}
          className='pokemonFilter__button pokeTypeBtn All'
        >
          All
        </button>
      </div>
    </div>
  );
};

export default PokemonFilter;
