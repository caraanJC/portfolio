import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators, State } from './state';

import { Route, Switch } from 'react-router-dom';
import PokemonMoreInfo from './components/PokemonMoreInfo';
import PokemonFilter from './components/PokemonFilter';
import PokeList from './components/PokeList';
import { resetPokedex } from './state/action-creators';

const App = () => {
  const pokedex = useSelector((state: State) => state.pokedex);
  const selectedType = useSelector((state: State) => state.selectedType);

  const dispatch = useDispatch();

  const { setPokemonTypes } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const distinct = (value: string, index: number, self: string[]) => {
      return self.indexOf(value) === index;
    };
    let pokeTypes = Array();
    [...pokedex].map((pokemon) =>
      pokemon.types.forEach((type) => pokeTypes.push(type))
    );
    pokeTypes = pokeTypes.filter(distinct);
    pokeTypes.sort();

    setPokemonTypes(pokeTypes);
  });

  return (
    <div className={`app ${selectedType}`}>
      <Switch>
        <Route exact path='/'>
          <PokemonFilter />
          <PokeList />
        </Route>
        <Route path='/more-info'>
          <PokemonMoreInfo />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
