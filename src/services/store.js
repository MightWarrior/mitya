import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import Reducers from '../redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

export const history = createBrowserHistory();

const middlewares = [
  thunkMiddleware
];

const store = createStore(Reducers,composeWithDevTools(applyMiddleware(...middlewares)));

export default store;