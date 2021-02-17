import {
  NEW_POST_FAILURE,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
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
