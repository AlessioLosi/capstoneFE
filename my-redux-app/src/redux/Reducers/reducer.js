const initialState = {
  events: [],           // Gli eventi recuperati dal server
  eventDetails: null,    // Dettagli di un singolo evento
  loading: false,        // Stato di caricamento
  error: null,           // Stato per gli errori
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Quando la richiesta degli eventi è in corso
    case "FETCH_EVENTS_REQUEST":
      return {
        ...state,
        loading: true,  // Imposta il caricamento a true
      };

    // Quando gli eventi vengono recuperati con successo
    case "FETCH_EVENTS_SUCCESS":
      return {
        ...state,
        events: action.payload,  // Aggiungi gli eventi ricevuti
        loading: false,           // Finito il caricamento
      };

    // Quando si verifica un errore nel recupero degli eventi
    case "FETCH_EVENTS_FAILURE":
      return {
        ...state,
        error: action.payload,  // Aggiungi l'errore
        loading: false,          // Finito il caricamento
      };

    // Quando la creazione di un evento è andata a buon fine
    case "CREATE_EVENT_SUCCESS":
      return {
        ...state,
        events: [action.payload, ...state.events],  // Aggiungi il nuovo evento in cima alla lista
        loading: false,                            // Finito il caricamento
      };

    // Quando si verifica un errore nella creazione di un evento
    case "CREATE_EVENT_FAILURE":
      return {
        ...state,
        error: action.payload,  // Aggiungi l'errore
        loading: false,          // Finito il caricamento
      };

    // Quando il recupero dei dettagli di un singolo evento ha successo
    case "FETCH_EVENT_DETAILS_SUCCESS":
      return {
        ...state,
        eventDetails: action.payload,  // Aggiungi i dettagli dell'evento
      };

    // Quando si verifica un errore nel recupero dei dettagli dell'evento
    case "FETCH_EVENT_DETAILS_FAILURE":
      return {
        ...state,
        error: action.payload,  // Aggiungi l'errore
      };

    // Quando un evento viene eliminato con successo
    case "DELETE_EVENT_SUCCESS":
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload),  // Rimuovi l'evento dalla lista
      };

    // Quando si verifica un errore nell'eliminazione dell'evento
    case "DELETE_EVENT_FAILURE":
      return {
        ...state,
        error: action.payload,  // Aggiungi l'errore
      };

    default:
      return state;  // Restituisce lo stato invariato se nessuna azione corrisponde
  }
};

export default eventsReducer;
