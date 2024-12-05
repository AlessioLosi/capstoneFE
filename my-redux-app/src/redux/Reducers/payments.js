import { START_PAYMENT, PAYMENT_SUCCESS, PAYMENT_FAILURE } from '../actions/Payments';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PAYMENT:
      return { ...state, loading: true, error: null };
    case PAYMENT_SUCCESS:
      return { ...state, loading: false, success: true };
    case PAYMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;
