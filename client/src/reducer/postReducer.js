import {
  POST_LOADED_FAIL,
  POST_LOADED_SUCCESS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from "../context/containts";

export const postReducer = (state, action) => {
  switch (action.type) {
    case POST_LOADED_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        postsLoading: false,
      };

    case POST_LOADED_FAIL:
      return {
        ...state,
        posts: [],
        postsLoading: false,
      };

    default:
      return state;
  }
};