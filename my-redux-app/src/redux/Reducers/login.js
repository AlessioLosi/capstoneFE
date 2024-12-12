import {
  LOGIN,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE,
  LOGOUT
} from '../actions/login';

const initialState = {
  userData: null,
  token: localStorage.getItem('token') || null,
  isLoading: false,
  error: null,
  profileUpdated: false,
  avatarUpdated: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userData: action.payload,
        token: localStorage.getItem('token'),
        error: null,
      };
      case LOGOUT:
        return {
          ...state,
          userData: null,
          token: null,
          error: null,
          profileUpdated: false,
          avatarUpdated: false,
        };

    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        profileUpdated: false,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
        profileUpdated: true,
        error: null,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        profileUpdated: false,
      };
    case UPDATE_AVATAR_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        avatarUpdated: false,
      };
    case UPDATE_AVATAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: {
          ...state.userData,
          avatar: action.payload,
        },
        avatarUpdated: true,
        error: null,
      };
    case UPDATE_AVATAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        avatarUpdated: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
