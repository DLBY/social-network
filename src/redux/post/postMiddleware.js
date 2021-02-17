/* eslint-disable import/prefer-default-export */

import {
  requestNewPost,
  receiveNewPost,
  newPostError,
  requestAllPost,
  getAllPostError,
  receiveAllPost,
} from './postActions';

export const getAllPost = () => (dispatch) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  dispatch(requestAllPost());
  fetch('http://localhost:1337/posts?_limit=20&_sort=created_at:desc', config)
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(getAllPostError(response.message));
      } else {
        dispatch(receiveAllPost(response));
        console.log('response:', response);
      }
    });
};

export const newPost = (userData) => (dispatch) => {
  const { token, id, post } = userData;

  const data = {
    user: id,
    text: post,
  };

  const config = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  dispatch(requestNewPost());
  fetch('http://localhost:1337/posts', config)
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(newPostError(response.message));
      } else {
        dispatch(receiveNewPost(response));
        dispatch(getAllPost());
      }
    });
};
