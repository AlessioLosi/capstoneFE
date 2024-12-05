
export const START_PAYMENT = "START_PAYMENT";
export const PAYMENT_SUCCESS = "PAYMENT_SUCCESS";
export const PAYMENT_FAILURE = "PAYMENT_FAILURE";
export const FETCH_BOOKINGS_SUCCESS = "FETCH_BOOKINGS_SUCCESS";
export const FETCH_BOOKINGS_FAILURE = "FETCH_BOOKINGS_FAILURE";


export const startPayment = (eventId) => {
    return async (dispatch) => {
      try {
  
        const response = await fetch(`http://localhost:3001/api/payments/checkout/${eventId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
  
        console.log("Response Status:", response.status); 
        const responseText = await response.text(); 
        console.log("Response Body:", responseText); 
  
        if (response.ok) {

          window.location.href = responseText; 
        } else {
          throw new Error(`Errore durante il processo di pagamento, status: ${response.status}`);
        }
  
      } catch (error) {
        console.error("Errore catturato:", error); 
        dispatch({
          type: PAYMENT_FAILURE,
          payload: error.message,
        });
      }
    };
  };
  