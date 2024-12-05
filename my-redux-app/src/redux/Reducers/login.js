const initialState = {
  user: null, 
  token: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload, 
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload,  
      };
    default:
      return state;
  }
};

export default loginReducer;
