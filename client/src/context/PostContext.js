import { createContext, useReducer, useState } from "react";
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

  const [showAddPost, setShowAddPost] = useState(false);

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

  //Add Post
  const addPost = async (newPost) => {
    try {
      const response = await axios.post(`${apiUrl}/posts`, newPost);

      if (response.data.success) {
        dispatch({
          type: ADD_POST,
          payload: response.data.post,
        });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : {
            success: false,
            message: error.message,
          };
    }
  };
  const editPost = () => {};
  const deletePost = () => {};

  const postContextData = {
    getPosts,
    addPost,
    editPost,
    deletePost,
    postState,
    dispatch,
    showAddPost,
    setShowAddPost,
  };
  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvide;
