const initialState = {
    events: [],
    loading: false,  
    error: null,  
  };
  
  const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
      // Quando gli eventi vengono recuperati con successo
      case "FETCH_EVENTS_SUCCESS":
        return {
          ...state,
          events: action.payload,  // Imposta la lista degli eventi nel state
        };
  
      // Quando un nuovo evento viene creato con successo
      case "CREATE_EVENT_SUCCESS":
        return {
          ...state,
          events: [action.payload, ...state.events],  // Aggiungi il nuovo evento in cima alla lista
        };
  
      // Gestione di errori in caso di fallimento
      case "CREATE_EVENT_FAILURE":
        return {
          ...state,
          error: action.payload,  // Aggiungi l'errore nel state
        };
  
      default:
        return state;  // Restituisce lo stato invariato se nessuna azione corrisponde
    }
  };
  
  export default eventsReducer;
  