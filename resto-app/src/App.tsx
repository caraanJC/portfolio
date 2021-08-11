import Menu from './components/Menu';
import './styles/App.css';

import Nav from './components/Nav';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from './state';
import { bindActionCreators } from 'redux';

import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import AddItem from './components/AddItem';

function App() {
  const items = useSelector((state: State) => state.items);
  const cartItems = useSelector((state: State) => state.cartItems);

  const dispatch = useDispatch();

  const { initializeCategories, setCartCount, setTotal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const itemsUseEffect = () => {
    const distinct = (value: string, index: number, self: string[]) => {
      return self.indexOf(value) === index;
    };
    initializeCategories(
      [...items]
        .map((item) => {
          return item.category;
        })
        .filter(distinct)
        .sort()
    );
  };

  const cartItemsUseEffect = () => {
    let count = 0;
    let total = 0;
    [...cartItems].map((cartItem) => {
      count += cartItem.count;
      total += cartItem.count * cartItem.price;
      return cartItem;
    });

    setTotal(total);
    setCartCount(count);
  };

  useEffect(itemsUseEffect, [items, itemsUseEffect]);

  useEffect(cartItemsUseEffect, [cartItems, cartItemsUseEffect]);
  return (
    <div className='app'>
      <Nav />

      <Switch>
        <Route exact path='/'>
          <header className='app__header'>
            <h1 className='app__title'>Restaurant App</h1>
          </header>
          <Menu />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/addItem'>
          <AddItem />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
