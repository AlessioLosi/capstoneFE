const initialState = {
  events: [],           
  eventDetails: null,    
  loading: false,        
  error: null,         
  imageUrl: '',          
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {

    case "FETCH_EVENTS_REQUEST":
      return {
        ...state,
        loading: true,  
      };

    case "FETCH_EVENTS_SUCCESS":
      return {
        ...state,
        events: action.payload,  
        loading: false,           
      };

    case "FETCH_EVENTS_FAILURE":
      return {
        ...state,
        error: action.payload,  
        loading: false,         
      };

    case "CREATE_EVENT_SUCCESS":
      return {
        ...state,
        events: [action.payload, ...state.events],  
        loading: false,                           
      };

    case "CREATE_EVENT_FAILURE":
      return {
        ...state,
        error: action.payload,  
        loading: false,         
      };

    case "FETCH_EVENT_DETAILS_SUCCESS":
      return {
        ...state,
        eventDetails: action.payload,  
      };

    case "FETCH_EVENT_DETAILS_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    case "DELETE_EVENT_SUCCESS":
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload), 
      };

    case "DELETE_EVENT_FAILURE":
      return {
        ...state,
        error: action.payload,  
      };

   
    case "UPDATE_EVENT_IMAGE":
      return {
        ...state,
        imageUrl: action.payload,  
      };

    default:
      return state;  
  }
};

export default eventsReducer;
