import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_VALIDATION_ERRORS,
  LOGOUT_SUCCESS,
  TOGGLE_ADMIN_PANEL,
  AUTOLOGIN, 
  GET_PROFILE_SUCCESS,
  TOGGLE_PROFILE,
  GET_MAX,
  GET_PRODUCTS,
  CREATE_PRODUCT,
  CHOOSE_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PROFILE, 
  BUY_PRODUCTS
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
  profile,
  max,
  products,
  create, buy, update
} from '../../services/fetch';

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
// export const logoutSuccess = createAction(LOGOUT_SUCCESS);
// export const clearValidationErrors = createAction(CLEAR_VALIDATION_ERRORS);
// export const toggleAdminPanel = createAction(TOGGLE_ADMIN_PANEL);
// export const autoLogin = createAction(AUTOLOGIN);
export const getProfileSuccess = createAction(GET_PROFILE_SUCCESS);
export const toggleProfile = createAction(TOGGLE_PROFILE);
export const getMax = createAction(GET_MAX);
export const getProducts = createAction(GET_PRODUCTS);
export const chooseProduct = createAction(CHOOSE_PRODUCT);
export const deleteProduct = createAction(DELETE_PRODUCT);
export const createProduct = createAction(CREATE_PRODUCT);
export const buyProducts = createAction(BUY_PRODUCTS);
export const editProfile = createAction(EDIT_PROFILE);


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
  profile('/profiles/me', idToken.token)
    .then((res) => {
      console.log(res);
      dispatch(getProfileSuccess(res))})
}

export const profileToggle = () => (dispatch) => {
  dispatch(toggleProfile());
}

export const maxGet = () => (dispatch, getState) => {
  const { idToken } = getState().authReducer;
  max('/statistics/max', idToken.token)
    .then((res) => {
      console.log(res);
      dispatch(getMax(res));
    })
}

export const productsGet = (store) => (dispatch, getState) => {
  const { idToken } = getState().authReducer;
  products(`/products/${store}`, idToken.token)
    .then((res) => {
      console.log(res);
      dispatch(getProducts(res));
    })
}

export const productChoose = (product) => (dispatch) => {
  dispatch(chooseProduct(product));
}

export const productDelete = (product) => (dispatch) => {
  dispatch(deleteProduct(product));
}

export const productCreate = (product) => (dispatch, getState) => {

  console.log(product);
  const { idToken } = getState().authReducer;
  create(`/products/${product.store}`, product, idToken.token)
    .then(() => dispatch(createProduct()))
}

export const productsBuy = (check) => (dispatch, getState) => {

  console.log(check);
  const { idToken } = getState().authReducer;
  buy(`/buy`, check, idToken.token)
    .then(() => dispatch(buyProducts()))
}

export const profileEdit = (profile) => (dispatch, getState) => {
  console.log(profile);
  const { idToken } = getState().authReducer;
  update('/profiles/client', profile, idToken.token)
    .then(() => dispatch(editProfile()))
}
// export const adminPanel = () => dispatch => {
//   dispatch(toggleAdminPanel());
// }
