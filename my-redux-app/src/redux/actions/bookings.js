export const FETCH_BOOKINGS_REQUEST = 'FETCH_BOOKINGS_REQUEST';
export const FETCH_BOOKINGS_SUCCESS = 'FETCH_BOOKINGS_SUCCESS';
export const FETCH_BOOKINGS_FAILURE = 'FETCH_BOOKINGS_FAILURE';

export const DELETE_BOOKINGS_REQUEST = 'DELETE_BOOKINGS_REQUEST';
export const DELETE_BOOKINGS_SUCCESS = 'DELETE_BOOKINGS_SUCCESS';
export const DELETE_BOOKINGS_FAILURE = 'DELETE_BOOKINGS_FAILURE';

export const fetchPrenotazioni = () => async (dispatch) => {
    dispatch({ type: FETCH_BOOKINGS_REQUEST });
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:3001/me/prenotazioni`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Errore nel recupero delle prenotazioni');
        }


        const data = await response.json();
        console.log(data)
        dispatch({
            type: FETCH_BOOKINGS_SUCCESS,
            payload: data.content,
        });
    } catch (error) {
        dispatch({
            type: FETCH_BOOKINGS_FAILURE,
            payload: error.message,
        });
    }
};

export const deletePrenotazione = (id) => async (dispatch) => {
    dispatch({ type: DELETE_BOOKINGS_REQUEST });
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:3001/me/prenotazioni/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Errore nella cancellazione della prenotazione');
        }

        dispatch({
            type: DELETE_BOOKINGS_SUCCESS,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: DELETE_BOOKINGS_FAILURE,
            payload: error.message,
        });
    }
};
