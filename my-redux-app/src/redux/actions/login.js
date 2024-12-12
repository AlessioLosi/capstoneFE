import { jwtDecode } from 'jwt-decode';
export const LOGIN = "LOGIN"
export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
export const UPDATE_AVATAR_REQUEST = 'UPDATE_AVATAR_REQUEST';
export const UPDATE_AVATAR_SUCCESS = 'UPDATE_AVATAR_SUCCESS';
export const UPDATE_AVATAR_FAILURE = 'UPDATE_AVATAR_FAILURE';
export const LOGOUT = "LOGOUT";

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
      console.log(data)
      dispatch({
        type: "LOGIN",
        payload: data,
    
      });
    } catch (error) {
      console.error("Errore nel recupero dei dati dell'utente:", error.message);
    }
  };
};


export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: LOGOUT,
    });
    window.location.href = "/";
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
export const updateProfile = (profileData) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3001/user/me", {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });
    if (!response.ok) throw new Error('Failed to update profile');
    const data = await response.json();
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_FAILURE, error: error.message });
  }
};

export const updateAvatar = (avatarFile) => async (dispatch) => {
  dispatch({ type: UPDATE_AVATAR_REQUEST });
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append('avatar', avatarFile);
    const response = await fetch('http://localhost:3001/user/me/avatar', {
      method: 'PATCH',
      body: formData,
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error('Failed to update avatar');
    const data = await response.text();
    dispatch({ type: UPDATE_AVATAR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_AVATAR_FAILURE, error: error.message });
  }
};


