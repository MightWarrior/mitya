// import { GET_DEFAULT_MODES, GET_MODES, SET_DEF_USER_MODE, CREATE_MODE, EDIT_MODE, DELETE_MODE, REQUEST_FAIL, GET_MODE, GET_USERS, CREATE_AREA, CREATE_DEFAULT} from './actionTypes';
// import { createAction } from 'redux-actions';
// import {createMode, getMode, getModes, setDefault, getDefaultModes, getUsers, createArea, createDefault} from '../../services/fetch';

// export const getModesSuccess = createAction(GET_MODES);
// export const getModeSuccess = createAction(GET_MODE);
// export const getDefaultModesSuccess = createAction(GET_DEFAULT_MODES);
// export const createModeSuccess = createAction(CREATE_MODE);
// export const editModeSuccess = createAction(EDIT_MODE);
// export const deleteModeSuccess = createAction(DELETE_MODE);
// export const setDefaultSuccess = createAction(SET_DEF_USER_MODE);
// export const requestFail = createAction(REQUEST_FAIL);
// export const areaCreate = createAction(CREATE_AREA);
// export const defaultCreate = createAction(CREATE_DEFAULT);
// export const usersGet = createAction(GET_USERS);

// export const modesGet = () => dispatch => {
//   getModes('/modes')
//     .then(res => dispatch(getModesSuccess(res)))
//     .catch();
// }

// export const modeGet = (modeId) => dispatch => {
//   getMode(`/modes/${modeId}`)
//     .then(res => dispatch(getModeSuccess(res)))
//     .catch();
// }

// export const defaultModesGet = () => dispatch => {
//   getDefaultModes('/default')
//     .then(res => dispatch(getDefaultModesSuccess(res)))
//     .catch(err => dispatch(requestFail(err)));
// }

// export const defaultSet = (mode) => dispatch => {
//   setDefault('/default/setMode', mode)
//     .then(() => dispatch(setDefaultSuccess()))
//     .catch(err => requestFail(err))
// }

// export const modeCreate = (mode) => dispatch => {
//   createMode('/modes', mode)
//     .then(() => dispatch(createModeSuccess()))
//     .catch(() => dispatch(requestFail()))
// }

// export const users = () => dispatch => {
//   getUsers('/users')
//     .then((res) => dispatch(usersGet(res)))
//     .catch(() => dispatch(requestFail()))
// }

// export const area = (area) => dispatch => {
//   createArea('/area', area)
//     .then(() => dispatch(areaCreate()))
//     .catch(() => dispatch(requestFail()))
// }

// export const defaultM = (mode) => dispatch => {

//   console.log(mode);
//   createDefault('/default', mode)
//     .then(() => dispatch(defaultCreate()))
//     .catch(() => dispatch(requestFail))
// }

