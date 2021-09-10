import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { distinct } from '../helper';
import { actionCreators } from '../state';
import '../styles/Menu.css';

import EditItemForm from './EditItemForm';

const Menu = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const items = useSelector((state) => state.items);
  const itemToEdit = useSelector((state) => state.itemToEdit);

  const [menuFilter, setMenuFilter] = useState('All');

  const dispatch = useDispatch();
  const { setItemToEdit, setItems, login, setShowLogin } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handEditBtnClick = (item) => {
    setItemToEdit(item);
  };

  const handleDeleteBtnClick = (itemID) => {
    axios
      .delete(`http://localhost:8080/api/items/deleteItem/${itemID}`)
      .then((res) => {
        alert(res.data.message);
        axios.get('http://localhost:8080/api/items').then((res) => {
          setItems(res.data);
        });
      });
  };

  const handleBuyBtnClick = (itemID) => {
    if (Object.keys(currentUser).length === 0) {
      setShowLogin(true);
    } else {
      // add to cart Item of user
      if (currentUser.cartItems?.find((cartItem) => cartItem._id === itemID)) {
        // increase count only
        axios
          .put(
            `http://localhost:8080/api/users/${currentUser._id}/increaseCount`,
            {
              _id: itemID,
              count: 1,
            }
          )
          .then((res) => {
            axios
              .get(`http://localhost:8080/api/users/${currentUser._id}`)
              .then((res) => {
                let resData = res.data;
                delete resData.password;
                delete resData.__v;
                login(resData);
              });
          });
      } else {
        // add to cart
        axios
          .put(`http://localhost:8080/api/users/${currentUser._id}/addToCart`, {
            _id: itemID,
            count: 1,
          })
          .then((res) => {
            axios
              .get(`http://localhost:8080/api/users/${currentUser._id}`)
              .then((res) => {
                login(res.data);
              });
          });
      }
    }
  };

  return (
    <main className='menu'>
      <h1 className='menu__title'>Menu</h1>
      <select
        className='menu__filter'
        value={menuFilter}
        onChange={(e) => setMenuFilter(e.target.value)}
      >
        <option value='All'>All</option>
        {items
          ?.map((item) => item.category)
          ?.filter(distinct)
          ?.map((category) => (
            <option value={category} key={category}>
              {category[0].toUpperCase() + category.slice(1)}
            </option>
          ))}
      </select>
      <div className='menu__items'>
        {items
          ?.filter((item) => item.outOfStock !== true)
          ?.filter(
            (item) => item.category === menuFilter || menuFilter === 'All'
          )
          ?.map((item) => (
            <div key={item._id} className='menu__item'>
              <div className='menu__itemDetails'>
                <p className='item__name'>{item.name}</p>
                <img src={item.image} alt={item.name} className='item__image' />
                <p>₱ {item.price}</p>
                <p>{item.description}</p>
              </div>
              <div className='item__btn'>
                {currentUser.roles?.includes('admin') ||
                currentUser.roles?.includes('manager') ||
                currentUser.roles?.includes('employee') ? (
                  <div className='item__adminBtn'>
                    <button
                      className='button warning-button'
                      onClick={() => handEditBtnClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className='button danger-button'
                      onClick={() => handleDeleteBtnClick(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <button
                    className='button main-button menu__buyBtn'
                    onClick={() => handleBuyBtnClick(item._id)}
                  >
                    Buy
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
      {[...items]?.find((item) => item.outOfStock === true) &&
        (currentUser.roles?.includes('manager') ||
          currentUser.roles?.includes('admin') ||
          currentUser.roles?.includes('employee')) && <h2>Out of Stock</h2>}

      {items
        ?.filter((item) => item.outOfStock === true)
        ?.map((item) => (
          <div key={item._id}>
            <div>
              <p>{item.name}</p>
              <img src={item.image} alt={item.name} width='200px' />
              <p>₱ {item.price}</p>
              <p>{item.description}</p>
            </div>
            {currentUser.roles?.includes('admin') ||
            currentUser.roles?.includes('manager') ||
            currentUser.roles?.includes('employee') ? (
              <div>
                <button onClick={() => handEditBtnClick(item)}>Edit</button>
                <button onClick={() => handleDeleteBtnClick(item._id)}>
                  Delete
                </button>
              </div>
            ) : (
              <button onClick={() => handleBuyBtnClick(item._id)}>Buy</button>
            )}
          </div>
        ))}

      {!(Object.keys(itemToEdit).length === 0) && (
        <div>
          <h2>Edit Item</h2>

          <EditItemForm />
        </div>
      )}
    </main>
  );
};

export default Menu;
