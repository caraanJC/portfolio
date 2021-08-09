import Menu from './components/Menu';
import './App.css';

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

  useEffect(() => {
    const distinct = (value: string, index: number, self: string[]) => {
      return self.indexOf(value) === index;
    };

    let categories: string[] = [];
    [...items].map((item) => {
      categories.push(item.category);
      return item;
    });

    categories = categories.filter(distinct);
    categories.sort();

    initializeCategories(categories);
    // eslint-disable-next-line
  }, [items]);

  useEffect(() => {
    let count = 0;
    let total = 0;
    [...cartItems].map((cartItem) => {
      count += cartItem.count;
      total += cartItem.count * cartItem.price;
      return cartItem;
    });
    setTotal(total);
    setCartCount(count);
    // eslint-disable-next-line
  }, [cartItems]);
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
