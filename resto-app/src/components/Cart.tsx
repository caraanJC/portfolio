import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';
import CartItem from './CartItem';

import '../styles/Cart.css';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';

const Cart = () => {
  const cartItems = useSelector((state: State) => state.cartItems);
  const total = useSelector((state: State) => state.total);
  const items = useSelector((state: State) => state.items);

  const dispatch = useDispatch();
  const { emptyCart, editCartItemPrice } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const checkoutBtnClickHandler = () => {
    alert(`
    Thank You for Your Purchase!!!! 
    Total: Php ${total}
    `);
    emptyCart();
  };

  const onloadUseEffect = () => {
    [...items].map((item) => {
      const changedCartItem = [...cartItems].find(
        (cartItem) => cartItem.name === item.name
      );

      if (changedCartItem) {
        if (changedCartItem.price !== item.price) {
          editCartItemPrice(changedCartItem.name, item.price);
        }
      }
      return item;
    });
  };

  // eslint-disable-next-line
  useEffect(onloadUseEffect, []);

  return (
    <div className='cart'>
      <ul className='cart__list'>
        {[...cartItems].map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </ul>
      <div className='cart__total'>
        {[...cartItems].length === 0 ? (
          <p>Empty Cart</p>
        ) : (
          <>
            <p>Total: Php {total}</p>
            <button
              className='cart__checkout button'
              onClick={checkoutBtnClickHandler}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
