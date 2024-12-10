import {
    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE,
    FETCH_COMMENTS_BY_POST_REQUEST,
    FETCH_COMMENTS_BY_POST_SUCCESS,
    FETCH_COMMENTS_BY_POST_FAILURE,
    FETCH_COMMENTS_BY_USER_REQUEST,
    FETCH_COMMENTS_BY_USER_SUCCESS,
    FETCH_COMMENTS_BY_USER_FAILURE,
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILURE,
    UPDATE_COMMENT_REQUEST,
    UPDATE_COMMENT_SUCCESS,
    UPDATE_COMMENT_FAILURE,
  } from "../actions/comments";
  
  const initialState = {
    commentsByPost: {},
    userComments: [],
    loading: false,
    error: null,
  };
  
  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_COMMENT_REQUEST:
      case FETCH_COMMENTS_BY_POST_REQUEST:
      case FETCH_COMMENTS_BY_USER_REQUEST:
      case DELETE_COMMENT_REQUEST:
      case UPDATE_COMMENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case CREATE_COMMENT_SUCCESS:
        const postComments = state.commentsByPost[action.payload.postId] || [];
        return {
          ...state,
          loading: false,
          commentsByPost: {
            ...state.commentsByPost,
            [action.payload.postId]: [...postComments, action.payload],
          },
        };
  
      case FETCH_COMMENTS_BY_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          commentsByPost: {
            ...state.commentsByPost,
            [action.payload.postId]: action.payload.comments,
          },
        };
  
      case FETCH_COMMENTS_BY_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          userComments: action.payload,
          
        };
  
      case DELETE_COMMENT_SUCCESS:
        const { postId, commentId } = action.payload;
        return {
          ...state,
          loading: false,
          commentsByPost: {
            ...state.commentsByPost,
            [postId]: state.commentsByPost[postId]?.filter(
              (comment) => comment.id !== commentId
            ),
          },
          userComments: state.userComments.filter(
            (comment) => comment.id !== commentId
          ),
        };
  
      case UPDATE_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          commentsByPost: {
            ...state.commentsByPost,
            [action.payload.postId]: state.commentsByPost[action.payload.postId]?.map(
              (comment) =>
                comment.id === action.payload.id ? action.payload : comment
            ),
          },
          userComments: state.userComments.map((comment) =>
            comment.id === action.payload.id ? action.payload : comment
          ),
        };
  
      case CREATE_COMMENT_FAILURE:
      case FETCH_COMMENTS_BY_POST_FAILURE:
      case FETCH_COMMENTS_BY_USER_FAILURE:
      case DELETE_COMMENT_FAILURE:
      case UPDATE_COMMENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default commentReducer;
  