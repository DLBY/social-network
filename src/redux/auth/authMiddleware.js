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
import { profileUser } from '../profile/profileMiddleware';

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
  fetch(
    'https://thp-strapi-social-network.herokuapp.com/auth/local/register',
    config
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(registerError(response.message));
      } else {
        Cookies.set('id_token', response.jwt);
        dispatch(receiveRegister(response));
        dispatch(profileUser(Cookies.get('id_token')));
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
  fetch(' https://thp-strapi-social-network.herokuapp.com/auth/local', config)
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(loginError(response.message));
      } else {
        Cookies.set('id_token', response.jwt);
        dispatch(receiveLogin(response));
        dispatch(profileUser(Cookies.get('id_token')));
      }
    });
};
