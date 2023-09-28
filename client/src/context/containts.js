export const apiUrl =
  process.env.NODE_ENV !== "production" ? "http://localhost:5000/api" : "";

export const LOCAL_STORAGE_TOKEN_NAME = "learnit";

export const POST_LOADED_SUCCESS = "POST_LOADED_SUCCESS";
export const POST_LOADED_FAIL = "POST_LOADED_FAIL";
export const ADD_POST = "ADD_POST";
export const FIND_POST = "FIND_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
