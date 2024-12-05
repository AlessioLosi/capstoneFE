
import {combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import loginReducer from '../Reducers/reducer';
import RegistrationReducer from "../Reducers/registration";
import { registration } from "../actions/login";
import eventsReducer from "../Reducers/reducer";
import postReducer from "../Reducers/post";
import paymentReducer from "../Reducers/payments";

const rootReducer = combineReducers({
  login: loginReducer,
  events:eventsReducer,
  registration:RegistrationReducer,
  posts:postReducer,
  payment:paymentReducer

});

const store = configureStore({
  reducer: rootReducer,
  rootReducer,

});
export default store;
