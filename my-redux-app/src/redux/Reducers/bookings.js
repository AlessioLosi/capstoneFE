import {
    FETCH_BOOKINGS_REQUEST,
    FETCH_BOOKINGS_SUCCESS,
    FETCH_BOOKINGS_FAILURE,
    DELETE_BOOKINGS_REQUEST,
    DELETE_BOOKINGS_SUCCESS,
    DELETE_BOOKINGS_FAILURE
} from '../actions/bookings';

const initialState = {
    bookings: [],
    loading: false,
    error: null,
};

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKINGS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BOOKINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                bookings: action.payload,
            };
        case FETCH_BOOKINGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_BOOKINGS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_BOOKINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                bookings: state.bookings.filter((booking) => booking.id !== action.payload),
            };
        case DELETE_BOOKINGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default bookingsReducer;
