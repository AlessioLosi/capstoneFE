
import {combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import loginReducer from "../Reducers/login";
import RegistrationReducer from "../Reducers/registration";
import { registration } from "../actions/login";
import eventsReducer from "../Reducers/reducer";
import postReducer from "../Reducers/post";
import paymentReducer from "../Reducers/payments";
import commentReducer from "../Reducers/comments";
import bookingsReducer from "../Reducers/bookings";

const rootReducer = combineReducers({
  events:eventsReducer,
  registration:RegistrationReducer,
  posts:postReducer,
  payment:paymentReducer,
  comments:commentReducer,
  bookings:bookingsReducer,
  login: loginReducer,

});

const store = configureStore({
  reducer: rootReducer,
  rootReducer,

});
export default store;
