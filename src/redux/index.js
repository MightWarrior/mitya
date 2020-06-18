import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import modeReducer from './modes/reducer';

const Reducers = combineReducers({
  authReducer,
  modeReducer
});

export default Reducers;