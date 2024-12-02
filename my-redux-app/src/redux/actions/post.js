export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";
export const FETCH_POST_DETAILS_SUCCESS = "FETCH_POST_DETAILS_SUCCESS";
export const FETCH_POST_DETAILS_FAILURE = "FETCH_POST_DETAILS_FAILURE";
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";
export const ListPost = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/tuttipost", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       "Authorization": `Bearer ${token}`,
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
        console.log("post", data);
        console.log(data.content)
        dispatch({
          type: FETCH_POST_SUCCESS, 
          payload: data.content,
          
        });
      })
      .catch((err) => {
        console.log("Errore nel recupero dei dati:", err);
      });
  };
};
export const createPost = (PostData) => {
    return async (dispatch) => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3001/me/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify(PostData),
        });
  
        if (!response.ok) {
          throw new Error("Errore durante la creazione dell'post");
        }
  
        const data = await response.json();
        console.log("Post creato:", data);
  
        dispatch({
          type: "CREATE_POST_SUCCESS",
          payload: data,
        });
      } catch (error) {
        console.error("Errore nella creazione dell'post:", error);
        dispatch({
          type: "CREATE_POST_FAILURE",
          payload: error.message,
        });
      }
    };
  };
  
  export const fetchMyPosts = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_POST_DETAILS_REQUEST });
  
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:3001/me/post`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati');
        }
  
        const data = await response.json();
        console.log('Post ricevuti:', data);
        dispatch({
          type: FETCH_POST_DETAILS_SUCCESS,
          payload: data, 
        });
      } catch (err) {
        console.error('Errore nel recupero dei dati:', err);
        dispatch({
          type: FETCH_POST_DETAILS_FAILURE,
          payload: err.message,
        });
      }
    };
  };

export const deletePost = (postId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST });

    try {
        const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3001/me/post/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Errore durante l'eliminazione del post");
      }

      dispatch({ type: DELETE_POST_SUCCESS, payload: postId });
    } catch (err) {
      console.error("Errore durante l'eliminazione del post:", err);
      dispatch({
        type: DELETE_POST_FAILURE,
        payload: err.message,
      });
    }
  };
};

  