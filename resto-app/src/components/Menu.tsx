import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';
import Item from './Item';

import '../styles/Menu.css';
import { bindActionCreators } from 'redux';

interface IParams {
  item: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
  };
}

const Menu = () => {
  const items = useSelector((state: State) => state.items);
  const cartItems = useSelector((state: State) => state.cartItems);
  const categories = useSelector((state: State) => state.categories);
  const total = useSelector((state: State) => state.total);
  const selectedCategory = useSelector(
    (state: State) => state.selectedCategory
  );

  const dispatch = useDispatch();
  const { setSelectedCategory, emptyCart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const compare = (a: IParams['item'], b: IParams['item']) => {
    if (a.priority < b.priority) {
      return -1;
    }
    if (a.priority > b.priority) {
      return 1;
    }
    return 0;
  };
  const checkoutBtnClickHandler = () => {
    alert(`
    Thank You for Your Purchase!!!! 
    Total: Php ${total}
    `);
    emptyCart();
  };

  return (
    <main className='menu'>
      <select
        name='menuCategory'
        className='menu__category'
        value={selectedCategory}
        onChange={selectChangeHandler}
      >
        {['All', ...categories].map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <ul className='menu__list'>
        {[...items]
          .filter(
            (item) =>
              item.category === selectedCategory || selectedCategory === 'All'
          )
          .sort(compare)
          .map((item) => (
            <Item item={item} key={item.id} />
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
    </main>
  );
};

export default Menu;
