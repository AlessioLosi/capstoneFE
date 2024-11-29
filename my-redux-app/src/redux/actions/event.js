export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";
export const FETCH_EVENTS_FAILURE = "FETCH_EVENTS_FAILURE";
export const FETCH_EVENT_DETAILS_SUCCESS = "FETCH_EVENT_DETAILS_SUCCESS";
export const FETCH_EVENT_DETAILS_FAILURE = "FETCH_EVENT_DETAILS_FAILURE";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE";
export const ListEvent = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/tuttieventi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzI5MDAzMzAsImV4cCI6MTczMzUwNTEzMCwic3ViIjoiNTZhMDM5ODMtY2VmNC00ZWUzLTk5ODUtMzU5OWY0ODI0ZTMzIn0.XI0BP4WcWxj-yM9MOyYj3j1-g8w3X6S8wrskMPDyu1s`,
      },
    })
      .then((response) => { 
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((data) => {
        console.log("eventi", data);
        console.log(data.content)
        dispatch({
          type: FETCH_EVENTS_SUCCESS,  // Correzione qui
          payload: data.content,
          
        });
      })
      .catch((err) => {
        console.log("Errore nel recupero dei dati:", err);
      });
  };
};
export const createEvent = (eventData) => {
    return async (dispatch) => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3001/me/eventi", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzI5MDAzMzAsImV4cCI6MTczMzUwNTEzMCwic3ViIjoiNTZhMDM5ODMtY2VmNC00ZWUzLTk5ODUtMzU5OWY0ODI0ZTMzIn0.XI0BP4WcWxj-yM9MOyYj3j1-g8w3X6S8wrskMPDyu1s `,
          },
          body: JSON.stringify(eventData),
        });
  
        if (!response.ok) {
          throw new Error("Errore durante la creazione dell'evento");
        }
  
        const data = await response.json();
        console.log("Evento creato:", data);
  
        dispatch({
          type: "CREATE_EVENT_SUCCESS",
          payload: data,
        });
      } catch (error) {
        console.error("Errore nella creazione dell'evento:", error);
        dispatch({
          type: "CREATE_EVENT_FAILURE",
          payload: error.message,
        });
      }
    };
  };

export const fetchEvents = (artista, page = 0, size = 10) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3001/me/eventi?artista=${artista}&page=${page}&size=${size}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzI5MDAzMzAsImV4cCI6MTczMzUwNTEzMCwic3ViIjoiNTZhMDM5ODMtY2VmNC00ZWUzLTk5ODUtMzU5OWY0ODI0ZTMzIn0.XI0BP4WcWxj-yM9MOyYj3j1-g8w3X6S8wrskMPDyu1s`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore nel recupero degli eventi");
      }

      const data = await response.json();
      dispatch({ type: FETCH_EVENTS_SUCCESS, payload: data.content });  // Assuming 'content' holds the events data
    } catch (error) {
      dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.message });
    }
  };
};


export const fetchEventDetails = (eventId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3001/eventi/${eventId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Errore nel recupero dei dettagli dell'evento");
      }

      const data = await response.json();
      dispatch({ type: FETCH_EVENT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_EVENT_DETAILS_FAILURE, payload: error.message });
    }
  };
};

export const deleteEvent = (eventId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3001/me/eventi/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzI5MDAzMzAsImV4cCI6MTczMzUwNTEzMCwic3ViIjoiNTZhMDM5ODMtY2VmNC00ZWUzLTk5ODUtMzU5OWY0ODI0ZTMzIn0.XI0BP4WcWxj-yM9MOyYj3j1-g8w3X6S8wrskMPDyu1s`,
        },
      });

      if (!response.ok) {
        throw new Error("Errore nell'eliminazione dell'evento");
      }

      dispatch({ type: DELETE_EVENT_SUCCESS, payload: eventId ,
      });
    } catch (error) {
      dispatch({ type: DELETE_EVENT_FAILURE, payload: error.message });
    }
  };
};


  
