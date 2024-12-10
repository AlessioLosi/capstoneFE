export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';
export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const FETCH_COMMENTS_BY_POST_SUCCESS = 'FETCH_COMMENTS_BY_POST_SUCCESS';
export const FETCH_COMMENTS_BY_POST_FAILURE = 'FETCH_COMMENTS_BY_POST_FAILURE';
export const FETCH_COMMENTS_BY_POST_REQUEST = 'FETCH_COMMENTS_BY_POST_REQUEST';
export const FETCH_COMMENTS_BY_USER_SUCCESS = 'FETCH_COMMENTS_BY_USER_SUCCESS';
export const FETCH_COMMENTS_BY_USER_FAILURE = 'FETCH_COMMENTS_BY_USER_FAILURE';
export const FETCH_COMMENTS_BY_USER_REQUEST = 'FETCH_COMMENTS_BY_USER_REQUEST';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';
export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';

export const createComment = (commentData, postId) => {
    return async (dispatch) => {
      dispatch({ type: CREATE_COMMENT_REQUEST });
  
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:3001/me/commento?id=${postId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...commentData,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Errore nella creazione del commento");
        }
  
        const data = await response.json();
        dispatch({
          type: CREATE_COMMENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CREATE_COMMENT_FAILURE,
          payload: error.message,
        });
      }
    };
  };
  
  export const fetchCommentsByPost = (postId) => {
    return async (dispatch) => {
      dispatch({ type: FETCH_COMMENTS_BY_POST_REQUEST });
  
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);
  
        const response = await fetch(
          `http://localhost:3001/me/commento/${postId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        console.log("Response Status:", response.status);
  
        if (!response.ok) {
          throw new Error("Errore nel recupero dei commenti per il post");
        }
  
        const data = await response.json();
        console.log("Data ricevuta:", data.content);
  
        dispatch({
          type: FETCH_COMMENTS_BY_POST_SUCCESS,
          payload: {
            postId, 
            comments: data.content, 
          },
        });
        
      } catch (error) {
        console.error("Errore:", error);
        dispatch({
          type: FETCH_COMMENTS_BY_POST_FAILURE,
          payload: error.message,
        });
      }
    };
  };
  

export const fetchCommentsByUser = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_COMMENTS_BY_USER_REQUEST });

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3001/me/commenti/utente`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore nel recupero dei commenti dell'utente");
      }
      

      const data = await response.json();
    
      dispatch({
        type: FETCH_COMMENTS_BY_USER_SUCCESS,
        payload: data.content,
      });
    } catch (error) {
      dispatch({
        type: FETCH_COMMENTS_BY_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const deleteComment = (commentId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_COMMENT_REQUEST });

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3001/me/commento/${commentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Errore nell'eliminazione del commento");
      }

      dispatch({
        type: DELETE_COMMENT_SUCCESS,
        payload: commentId,
      });
    } catch (error) {
      dispatch({
        type: DELETE_COMMENT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const updateComment = (commentId, commentData) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_COMMENT_REQUEST });

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3001/me/commento/${commentId}?id=${commentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) {
        throw new Error("Errore nella modifica del commento");
      }

      const data = await response.json();
      dispatch({
        type: UPDATE_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_COMMENT_FAILURE,
        payload: error.message,
      });
    }
  };
};
