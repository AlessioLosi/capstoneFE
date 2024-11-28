
import {combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import loginReducer from '../Reducers/reducer';
import RegistrationReducer from "../Reducers/registration";
import { registration } from "../actions/actions";

const rootReducer = combineReducers({
  login: loginReducer,
  registration:RegistrationReducer
});

const store = configureStore({
  reducer: rootReducer,
  rootReducer,

});
export default store;
