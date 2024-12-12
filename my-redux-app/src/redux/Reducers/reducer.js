import {
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  FETCH_EVENT_DETAILS_SUCCESS,
  FETCH_EVENT_DETAILS_FAILURE,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  UPDATE_EVENT_IMAGE,
  UPDATE_EVENT_FAILURE,
} from "../actions/event";

const initialState = {
  events: [],
  eventDetails: null,
  loading: false,
  error: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EVENTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
        error: null,
      };

    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events, action.payload],
        error: null,
      };

    case CREATE_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case FETCH_EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        eventDetails: action.payload,
        error: null,
      };

    case FETCH_EVENT_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
        error: null,
      };

    case DELETE_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_EVENT_IMAGE:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? { ...event, ...action.payload } : event
        ),
        error: null,
      };

    case UPDATE_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default eventsReducer;
