// src/store/index.js
import { createStore, applyMiddleware, compose } from 'redux';
import { countryReducer } from '../reducer/countryReducer'
import thunk from 'redux-thunk';

const composeWithDevTools = typeof window !== 'undefined'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : (...args) => {
    if (args.length === 0) return undefined;
    if (typeof args[0] === 'object') return compose;
    return compose(...args);
  };

const store = createStore(countryReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;