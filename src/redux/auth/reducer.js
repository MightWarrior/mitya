import { handleActions } from 'redux-actions';

import {
  loginSuccess,
  loginFailure,
  getProfileSuccess
} from './actions';

const initialState = {
  user: [],
  loginErrors: {}, 
  idToken: false,
  isAdminToggled: false
}

const authReducer = handleActions({
  [loginSuccess]: (state, action) => ({
    ...state,
    idToken: action.payload
  }),
  [loginFailure]: (state, action) => ({
    ...state,
    user: undefined,
    loginErrors: action.payload,
  }),
  [getProfileSuccess]: (state, action) => ({
    ...state,
    user: action.payload
  })
}, initialState);

export default authReducer;