import { jwtDecode } from 'jwt-decode';
export const LOGIN = "LOGIN"

export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
  
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const result = await response.json();
      if (result && result.accessToken) {
        localStorage.setItem("token", result.accessToken);
        console.log(result)
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: result.accessToken,

        });
      } else {
        throw new Error("Token non trovato nella risposta.");
      }
    } catch (error) {
      console.error("Errore durante il login:", error.message);
      throw error;
    }
  };
};



export const AuthLog = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3001/user/me", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      
console.log(response)
      if (!response.ok) {
        throw new Error("Errore nel recupero dei dati dell'utente");
      }

      const data = await response.json();
      dispatch({
        type: "LOGIN",
        payload: data,
    
      });
      localStorage.setItem("userData", JSON.stringify(data));
    console.log(data)
    } catch (error) {
      console.error("Errore nel recupero dei dati dell'utente:", error.message);
    }
  };
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

