/* eslint-disable import/prefer-default-export */
import Cookies from 'js-cookie';
import {
  receiveRegister,
  requestRegister,
  registerError,
  requestLogin,
  receiveLogin,
  loginError,
} from './authActions';

export const registerUser = (userData) => (dispatch) => {
  console.log('userData:', userData);
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  dispatch(requestRegister());
  fetch('http://localhost:1337/auth/local/register', config)
    .then((response) => response.json())
    .then((response) => {
      if (response.status === 'error') {
        dispatch(registerError(response.message));
      } else {
        dispatch(receiveRegister(response));
        Cookies.set('id_token', response.jwt);
      }
    });
};

export const loginUser = (userData) => (dispatch) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  dispatch(requestLogin());
  fetch(' http://localhost:1337/auth/local', config)
    .then((response) => response.json())
    .then((response) => {
      if (response.status === 'error') {
        dispatch(loginError(response.message));
      } else {
        dispatch(receiveLogin(response));
        Cookies.set('id_token', response.jwt);
      }
    });
};
