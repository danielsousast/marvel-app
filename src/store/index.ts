import { createStore, applyMiddleware, compose, Store } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from '../config/ReactotronConfig';

import reducers from './reducers';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['app'],
  },
  reducers,
);

const middleware = [thunk];
const composed = applyMiddleware(...middleware);
const enhancer = Reactotron.createEnhancer();

const store: Store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk), enhancer),
);

const persistor = persistStore(store);

export { store, persistor };
