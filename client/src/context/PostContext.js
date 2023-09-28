import { createContext, useReducer, useState } from "react";
import { postReducer } from "../reducer/postReducer";
import axios from "axios";
import { FIND_POST, apiUrl } from "./containts";
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
    post: "",
    posts: [],
    postsLoading: true,
  });

  const [showAddPost, setShowAddPost] = useState(false);
  const [showEditPost, setShowEditPost] = useState(false);

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

  //Find post when user is updating post
  const findPost = (postId) => {
    const post = postState.posts.find((post) => post._id === postId);
    dispatch({
      type: FIND_POST,
      payload: post,
    });
  };

  //Edit Post
  const editPost = async (updatePost) => {
    try {
      const response = await axios.put(
        `${apiUrl}/posts/${updatePost._id}`,
        updatePost
      );

      if (response.data.success) {
        dispatch({
          type: EDIT_POST,
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

  //Delete Post
  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`${apiUrl}/posts/${postId}`);

      if (response.data.success) {
        dispatch({
          type: DELETE_POST,
          payload: postId,
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

  const postContextData = {
    getPosts,
    addPost,
    findPost,
    editPost,
    deletePost,
    postState,
    dispatch,
    showAddPost,
    setShowAddPost,
    showEditPost,
    setShowEditPost,
  };
  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvide;
