import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import history from './history';
import sessionStore from './sessionStore';

import rootReducer from './rootReducer';

// NOTE: This map function will strip out unwanted data from the store before persisting it into storage.
const map = ({ form, message, routing, ...other }) => ({ ...other });

const middleware = applyMiddleware(thunk, routerMiddleware(history), sessionStore({ map }));

const enhancer = window.devToolsExtension ? window.devToolsExtension() : f => f;

let initialState = undefined;
try {
  initialState = JSON.parse(sessionStorage.getItem('store')) || undefined;
} catch (e) {}

export default createStore(rootReducer, initialState, compose(middleware, enhancer));
