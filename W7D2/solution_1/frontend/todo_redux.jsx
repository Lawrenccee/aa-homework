import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  // store.dispatch = addLoggingToDispatch(store);

  // store = applyMiddleWares(store, [addLoggingToDispatch]);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// const addLoggingToDispatch = (store) => {
//   const dispatch = store.dispatch;
//
//   return (action) => {
//     console.log(store.getState());
//     const result = dispatch(action);
//     console.log(store.getState());
//     return result;
//   };
// };

// const addLoggingToDispatch = store => next => action => {
//   console.log(store.getState());
//   console.log(action);
//   next(action);
//   console.log(store.getState());
// };

// const applyMiddleWares = (store, middleWares) => {
//   let dispatch = store.dispatch;
//
//   middleWares.forEach((middleWare) => {
//     dispatch = middleWare(store)(dispatch);
//   });
//
//   return Object.assign({}, store, { dispatch });
// };
