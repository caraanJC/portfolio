import './App.css';

import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import ManageUsers from './components/ManageUsers';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import axios from 'axios';
import UserInfo from './components/UserInfo';
import Orders from './components/Orders';

function App() {
  const currentUser = useSelector((state) => state.currentUser);
  const showLogin = useSelector((state) => state.showLogin);

  const dispatch = useDispatch();

  const { setUsers, setItems } = bindActionCreators(actionCreators, dispatch);

  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    if (
      currentUser.roles?.includes('employee') ||
      currentUser.roles?.includes('manager') ||
      currentUser.roles?.includes('admin')
    ) {
      axios.get('http://localhost:8080/api/users/').then((res) => {
        setUsers(res.data);
      });
    }
  }, [currentUser, setUsers]);
  useEffect(() => {
    axios.get('http://localhost:8080/api/items').then((res) => {
      setItems(res.data);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <div className='app'>
      <Navbar setShowRegister={setShowRegister} />

      <Route exact path='/'>
        <Home />
      </Route>
      {showLogin && <Login setShowRegister={setShowRegister} />}
      {showRegister && <Register setShowRegister={setShowRegister} />}

      <Route path='/cart'>
        <Cart />
      </Route>

      <Route path='/profile/'>
        <UserInfo />
      </Route>
      <Route path='/manage-users'>
        <ManageUsers />
      </Route>
      <Route path='/orders'>
        <Orders />
      </Route>
    </div>
  );
}

export default App;
