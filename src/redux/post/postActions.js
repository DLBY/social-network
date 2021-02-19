import {
  NEW_POST_FAILURE,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_USER_POST_FAILURE,
  GET_USER_POST_SUCCESS,
  GET_USER_POST_REQUEST,
  DEL_POST_REQUEST,
  DEL_POST_SUCCESS,
  DEL_POST_FAILURE,
} from './postTypes';

export const requestNewPost = () => ({
  type: NEW_POST_REQUEST,
  isFetching: true,
});

export const receiveNewPost = (response) => ({
  type: NEW_POST_SUCCESS,
  isFetching: false,
  response,
});

export const newPostError = (message) => ({
  type: NEW_POST_FAILURE,
  isFetching: false,
  message,
});

export const requestAllPost = () => ({
  type: GET_ALL_POST_REQUEST,
  isFetching: true,
});

export const receiveAllPost = (response) => ({
  type: GET_ALL_POST_SUCCESS,
  isFetching: false,
  allPosts: response,
});

export const getAllPostError = (message) => ({
  type: GET_ALL_POST_FAILURE,
  isFetching: false,
  message,
});

export const requestGetUserPost = () => ({
  type: GET_USER_POST_REQUEST,
  isFetching: true,
});

export const receiveGetUserPost = (response) => ({
  type: GET_USER_POST_SUCCESS,
  isFetching: false,
  userPosts: response,
});

export const getUserPostError = (message) => ({
  type: GET_USER_POST_FAILURE,
  isFetching: false,
  message,
});

export const requestDelPost = () => ({
  type: DEL_POST_REQUEST,
  isFetching: true,
});

export const receiveDelPost = (response) => ({
  type: DEL_POST_SUCCESS,
  isFetching: false,
  postDel: response,
});

export const delPostError = (message) => ({
  type: DEL_POST_FAILURE,
  isFetching: false,
  message,
});
