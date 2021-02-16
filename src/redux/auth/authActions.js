import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  LOGOUT_SUCCESS,
} from './authTypes';

// Register
export const requestRegister = (creds) => ({
  type: REGISTER_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds,
});

export const receiveRegister = (user) => ({
  type: REGISTER_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.jwt,
});

export const registerError = (message) => ({
  type: REGISTER_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
});

// Login
export const requestLogin = (creds) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds,
});

export const receiveLogin = (response) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: response.jwt,
  user: response.user,
});

export const loginError = (message) => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
});

export const logout = () => ({
  type: LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false,
});
