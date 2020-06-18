import { handleActions } from 'redux-actions';

import {
  loginSuccess,
  loginFailure,
  getProfileSuccess,
  toggleProfile,
  getMax,
  getProducts,
  chooseProduct,
  deleteProduct,
  createProduct,
  buyProducts, 
  editProfile
} from './actions';
import { create } from '../../services/fetch';

const initialState = {
  user: [],
  loginErrors: {}, 
  idToken: false,
  isProfileToggled: false,
  maxItem: [],
  products: [],
  basket: [],
  total: 0,
  needRefresh: false,
  refreshMax: false
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
    user: action.payload,
    needRefresh: false
  }),
  [toggleProfile]: (state) => ({
    ...state,
    isProfileToggled: !state.isProfileToggled,
  }),
  [getMax]: (state, action) => ({
    ...state,
    maxItem: action.payload,
    refreshMax: false
  }),
  [getProducts]: (state, action) => ({
    ...state,
    products: action.payload,
    needRefresh: false
  }),
  [chooseProduct]: (state, action) => ({
    ...state,
    basket: [...state.basket, action.payload],
    products: state.products.filter(item => item._id !== action.payload._id),
    total: state.total + parseInt(action.payload.cost)
  }),
  [deleteProduct]: (state, action) =>({
    ...state,
    basket: state.basket.filter(item => item._id !== action.payload._id),
    products: [...state.products, action.payload],
    total: state.total - parseInt(action.payload.cost)
  }),
  [createProduct]: (state) => ({
    ...state,
    needRefresh: true
  }), 
  [buyProducts]: (state) => ({
    ...state,
    refreshMax: true
  }), 
  [editProfile]: (state) => ({
    ...state,
    needRefresh: true
  })
}, initialState);

export default authReducer;