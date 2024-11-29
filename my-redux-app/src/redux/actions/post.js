export const login = (data) => async (dispatch) => {
    dispatch({ type: 'POST' });
  
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Errore durante il login');
      }
      
  
      const result = await response.json();
  
      console.log(result);
    
  
  
      if (result && result.token) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.token });
        localStorage.setItem('token', result.token);
       
      } else {
        throw new Error("Token non trovato nella risposta.");
      }
    } catch (error) {
  
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  
  };
  
  export const registration = (data) => async (dispatch) => {
    dispatch({ type: 'REGISTRATION_REQUEST' });
  
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Errore durante il login');
      }
      
  
      const result = await response.json();
  
      console.log(result);
    
  
  
      if (result && result.token) {
        dispatch({ type: 'REGISRTATION_SUCCESS', payload: result.token });
        localStorage.setItem('token', result.token);
       
      } else {
        throw new Error("Token non trovato nella risposta.");
      }
    } catch (error) {
  
      dispatch({ type: 'REGISRTATION_FAILURE', payload: error.message });
    }
  
  };
  
  