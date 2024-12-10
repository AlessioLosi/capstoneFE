
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS';
export const FETCH_USER_POSTS_FAILURE = 'FETCH_USER_POSTS_FAILURE';
export const FETCH_USER_POSTS_REQUEST = 'FETCH_USER_POSTS_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';


export const createPost = (postData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST });

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3001/me/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Errore nella creazione del post");
      }

      const data = await response.json();
      console.log(data)
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_POST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3001/tuttipost`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore nel recupero dei post");
      }

      const data = await response.json();
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: data.content,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const fetchUserPosts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_POSTS_REQUEST });

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3001/me/post`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore nel recupero dei post dell'utente");
      }

      const data = await response.json();
      dispatch({
        type: FETCH_USER_POSTS_SUCCESS,
        payload: data.content,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_POSTS_FAILURE,
        payload: error.message,
      });
    }
  };
};
export const DELETE_POST = "DELETE_POST";

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://localhost:3001/me/post/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Errore nell'eliminazione del post");
      }

      dispatch({
        type: DELETE_POST,
        payload: postId, 
      });
    } catch (error) {
      console.error("Errore nell'eliminazione del post:", error);
    }
  };
};
export const updatePost = (postId, updatedData) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_POST_REQUEST });

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3001/me/post/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Errore nell'aggiornamento del post");
      }

      const data = await response.json();
      dispatch({
        type: UPDATE_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_POST_FAILURE,
        payload: error.message,
      });
    }
  };
};


