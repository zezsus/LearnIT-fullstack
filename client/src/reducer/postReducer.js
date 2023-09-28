import {
  POST_LOADED_FAIL,
  POST_LOADED_SUCCESS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  FIND_POST,
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

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case FIND_POST:
      return { ...state, post: action.payload };

    case EDIT_POST:
      const updatePost = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          return action.payload;
        } else {
          return post;
        }
      });

      return {
        ...state,
        posts: updatePost,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };

    default:
      return state;
  }
};
