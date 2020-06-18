import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_VALIDATION_ERRORS,
  LOGOUT_SUCCESS,
  TOGGLE_ADMIN_PANEL,
  AUTOLOGIN, 
  GET_PROFILE_SUCCESS
} from './actionTypes'

import { createAction } from 'redux-actions';

import redirect from '../../services/redirect';
import { ROUTES } from '../../constants';

import {
  passwordValidationError,
  getLoginValidationMessage
} from '../../services/validation';

import {
  login,
  profile
} from '../../services/fetch';

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
// export const logoutSuccess = createAction(LOGOUT_SUCCESS);
// export const clearValidationErrors = createAction(CLEAR_VALIDATION_ERRORS);
// export const toggleAdminPanel = createAction(TOGGLE_ADMIN_PANEL);
// export const autoLogin = createAction(AUTOLOGIN);
export const getProfileSuccess = createAction(GET_PROFILE_SUCCESS);


// export const clearAuthValidationErrors = () => dispatch => {
//   dispatch(clearValidationErrors());
// };

export const loginUser = (user) => dispatch => {
  login('/auth', user)
    .then(res => {
      dispatch(loginSuccess(res));
      redirect(`${ROUTES.PROFILE}`)
    })
    .catch(err => {
      dispatch(loginFailure(getLoginValidationMessage(err)))
    })
}

export const profileGet = () => (dispatch, getState) => {
  const { idToken } = getState().authReducer
  console.log(idToken);
  profile('/profiles/me', idToken.token)
    .then((res) => {
      console.log(res);
      dispatch(getProfileSuccess(res))})
}

// export const adminPanel = () => dispatch => {
//   dispatch(toggleAdminPanel());
// }
