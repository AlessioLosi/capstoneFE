

import {
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_USER_POSTS_REQUEST,
    FETCH_USER_POSTS_SUCCESS,
    FETCH_USER_POSTS_FAILURE,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
  } from '../actions/post';
  

  const initialState = {
    posts: [],
    userPosts: [],
    loading: false,
    error: null,
  };
  

  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: [action.payload, ...state.posts], // Adds new post to the list
        };
      case CREATE_POST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case FETCH_POSTS_REQUEST:
      case FETCH_USER_POSTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload,
        };
      case FETCH_USER_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          userPosts: action.payload,
        };
      case FETCH_POSTS_FAILURE:
      case FETCH_USER_POSTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: state.posts.filter(post => post.id !== action.payload),
        };
      case DELETE_POST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default postReducer;
  