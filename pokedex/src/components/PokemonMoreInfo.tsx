import { Link } from 'react-router-dom';

import '../styles/PokemonMoreInfo.css';
import PokemonData from './PokemonData';

const PokemonMoreInfo = () => {
  return (
    <div className='pokemonMoreInfo'>
      <Link to='/' className='pokemonMoreInfo__link'>
        ⟵ Go Back
      </Link>
      <PokemonData />
    </div>
  );
};

export default PokemonMoreInfo;
