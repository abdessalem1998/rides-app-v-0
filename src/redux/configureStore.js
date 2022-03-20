// configureStore.js
// manage app state globally
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ridesReducer from './rides/rides';
import userReducer from './user/user';

const reducer = combineReducers({ ridesReducer, userReducer });

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
