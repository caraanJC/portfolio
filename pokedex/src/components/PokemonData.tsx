import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';

import '../styles/PokemonData.css';

const PokemonData = () => {
  const selectedPokemon: any = useSelector(
    (state: State) => state.selectedPokemon
  );

  const dispatch = useDispatch();
  const { setSelectedType } = bindActionCreators(actionCreators, dispatch);

  const pokeTypeClickHandler = (pokeType: string) => {
    setSelectedType(pokeType);
  };

  return (
    <div className='pokemonData'>
      <div className='pokemonData__header'>
        <p className='pokemonData__name'>{selectedPokemon.name}</p>
        <p className='pokemonData__id'>{selectedPokemon.ntnlnum}</p>
      </div>

      <img
        className='pokemonData__img'
        src={selectedPokemon.img}
        alt={selectedPokemon.img}
      />
      <div className='pokemonData__details'>
        <p className='pokemonData__detailsHead'>Types</p>
        <div className='pokemonData__types'>
          {selectedPokemon.types.map((pokeType: string) => (
            <button
              key={pokeType}
              className={`pokeTypeBtn ${pokeType}`}
              onClick={() => pokeTypeClickHandler(pokeType)}
            >
              <Link to='/' className='pokemonData__link'>
                {pokeType}
              </Link>
            </button>
          ))}
        </div>
        <p className='pokemonData__description'>
          {selectedPokemon.Description}
        </p>
      </div>
    </div>
  );
};

export default PokemonData;
