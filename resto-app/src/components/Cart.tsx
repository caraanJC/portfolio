import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';
import CartItem from './CartItem';

import '../styles/Cart.css';
import { bindActionCreators } from 'redux';

const Cart = () => {
  const cartItems = useSelector((state: State) => state.cartItems);
  const total = useSelector((state: State) => state.total);

  const dispatch = useDispatch();
  const { emptyCart } = bindActionCreators(actionCreators, dispatch);

  const checkoutBtnClickHandler = () => {
    alert(`
    Thank You for Your Purchase!!!! 
    Total: Php ${total}
    `);
    emptyCart();
  };

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
