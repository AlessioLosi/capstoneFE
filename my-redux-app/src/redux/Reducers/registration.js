const initialState = {
    loading: false,
    error: null,
  };
  
  const RegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTRATION_REQUEST':
        return { ...state, loading: true, error: null };
      case 'REGISTRATION_SUCCESS':
        return { ...state, loading: false };
      case 'REGISTRATION_FAILURE':
        return { ...state, loading: false};
      default:
        return state;
    }
  };
  
  export default RegistrationReducer;