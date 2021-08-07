import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

import '../styles/PokeCard.css';

interface IProps {
  pokemon: {
    name: string;
    ntnlnum: string;
    img: string;
    types: string[];
    Description: string;
  };
}

const PokeCard: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const { setSelectedPokemon } = bindActionCreators(actionCreators, dispatch);

  const moreInfoClickHandler = () => {
    setSelectedPokemon(props.pokemon);
  };

  return (
    <li className='pokeCard'>
      <p className='pokeCard__name'>{props.pokemon.name}</p>
      <Link
        to={`/more-info`}
        onClick={moreInfoClickHandler}
        className='pokeCard__link'
      >
        <img
          className='pokeCard__img'
          src={props.pokemon.img}
          alt={props.pokemon.name}
        />
      </Link>
      <div className='pokeCard__types'>
        {props.pokemon.types.map((pokeType) => (
          <button key={pokeType} className={`pokeTypeBtn ${pokeType}`}>
            {pokeType}
          </button>
        ))}
      </div>
    </li>
  );
};

export default PokeCard;
