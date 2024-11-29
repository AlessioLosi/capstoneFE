
import {combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import loginReducer from '../Reducers/reducer';
import { login } from "../actions/login";
import RegistrationReducer from "../Reducers/registration";
import { registration } from "../actions/login";
import eventsReducer from "../Reducers/event";

const rootReducer = combineReducers({
  login: loginReducer,
  events:eventsReducer,
  registration:RegistrationReducer
});

const store = configureStore({
  reducer: rootReducer,
  rootReducer,

});
export default store;
