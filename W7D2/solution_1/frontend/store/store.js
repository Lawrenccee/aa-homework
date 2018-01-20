import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(extraMiddleWare, addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());
  console.log(action);
  console.log(next);
  next(action);
  console.log(store.getState());
};

const extraMiddleWare = store => next => action => {
  console.log(next);
  next(action);
};

export default configureStore;
