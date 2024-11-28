
import {combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import loginReducer from '../Reducers/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = configureStore({
  reducer: rootReducer,
  rootReducer,

});
export default store;
