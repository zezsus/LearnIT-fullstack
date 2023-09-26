import { createContext, useReducer } from "react";
import { postReducer } from "../reducer/postReducer";
import axios from "axios";
import { apiUrl } from "./containts";
import {
  POST_LOADED_FAIL,
  POST_LOADED_SUCCESS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from "../context/containts";

export const PostContext = createContext();

const PostContextProvide = ({ children }) => {
  //state
  const [postState, dispatch] = useReducer(postReducer, {
    posts: [],
    postsLoading: true,
  });

  //get all post
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      if (response.data.success) {
        dispatch({
          type: POST_LOADED_SUCCESS,
          payload: response.data.posts,
        });
      }
    } catch (error) {
      dispatch({ type: POST_LOADED_FAIL });
    }
  };
  const createPost = () => {};
  const editPost = () => {};
  const deletePost = () => {};

  const postContextData = {
    getPosts,
    createPost,
    editPost,
    deletePost,
    postState,
    dispatch,
  };
  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvide;
