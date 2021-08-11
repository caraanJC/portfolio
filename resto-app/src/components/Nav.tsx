import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';

import '../styles/Nav.css';

import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

import { useState } from 'react';

const Nav = () => {
  const cartCount = useSelector((state: State) => state.cartCount);
  const isAdmin = useSelector((state: State) => state.isAdmin);

  const dispatch = useDispatch();
  const { setIsAdmin } = bindActionCreators(actionCreators, dispatch);

  const [show, setShow] = useState('');

  const adminClickHandler = () => {
    setIsAdmin(true);
    setShow('');
  };

  const logoutClickHandler = () => {
    setIsAdmin(false);
    setShow('');
  };

  return (
    <nav>
      <ul className='nav'>
        <button className='nav__burger' onClick={() => setShow('show')}>
          <MenuIcon />
        </button>
        <div className={'link__group ' + show}>
          <button className='nav__close' onClick={() => setShow('')}>
            <CancelIcon />
          </button>
          <NavLink
            exact
            to='/'
            className='nav__link nav__link--home'
            activeClassName='selected'
            onClick={() => setShow('')}
          >
            Home
          </NavLink>
          {!isAdmin && (
            <NavLink
              exact
              to='/'
              className='nav__link nav__link--admin'
              onClick={adminClickHandler}
            >
              Admin
            </NavLink>
          )}

          {isAdmin && (
            <>
              <NavLink
                to='/addItem'
                className='nav__link nav__link--addItem'
                activeClassName='selected'
                onClick={() => setShow('')}
              >
                Add Item
              </NavLink>
              <NavLink
                exact
                to='/'
                className='nav__link nav__link--logout'
                onClick={logoutClickHandler}
              >
                Logout
              </NavLink>
            </>
          )}
        </div>

        <div className='nav__cart'>
          <NavLink className='nav__link' to='/cart' activeClassName='selected'>
            <ShoppingCartIcon fontSize='large' />
          </NavLink>
          <span className='nav__count'>{cartCount}</span>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
