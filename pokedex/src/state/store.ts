import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';

import persistStore from 'redux-persist/es/persistStore';

import localforage from 'localforage';

const persistConfig = {
  key: 'root',
  storage: localforage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
