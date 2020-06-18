// import { handleActions } from 'redux-actions';

// import {
//   getModeSuccess,
//   getModesSuccess,
//   getDefaultModesSuccess,
//   setDefaultSuccess,
//   createModeSuccess,
//   defaultCreate,
//   usersGet
// } from './actions';

// const initialState = {
//   modes: {},
//   currentMode: {},
//   defaultModes: [],
//   needRefresh: false,
//   users: [],
// }

// const modeReducer = handleActions({
//   [getModeSuccess]: (state, action) => ({
//     ...state,
//     needRefresh: false,
//     currentMode: action.payload.result,
//   }),
//   [getModesSuccess]: (state, action) => ({
//     ...state,
//     modes: action.payload.result,
//   }),
//   [getDefaultModesSuccess]: (state, action) => ({
//     ...state,
//     needRefresh: false,
//     defaultModes: action.payload.result,
//   }),
//   [setDefaultSuccess]: (state) => ({
//     ...state,
//     needRefresh: true,
//   }),
//   [createModeSuccess]: (state) => ({
//     ...state,
//     needRefresh: true,
//   }),
//   [usersGet]: (state, action) => ({
//     ...state,
//     users: action.payload.result
//   }),
//   [defaultCreate]: (state, action) => ({
//     ...state,
//     needRefresh: true
//   })
// }, initialState)

// export default modeReducer;
