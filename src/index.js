// src/index.js
import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import greetingReducer from './reducers';

const store = createStore(greetingReducer, applyMiddleware(thunk));

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
