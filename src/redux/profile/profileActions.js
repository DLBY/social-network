import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
  GET_OTHER_PROFILE_FAILURE,
  GET_OTHER_PROFILE_REQUEST,
  GET_OTHER_PROFILE_SUCCESS,
} from './profileTypes';

export const requestProfile = () => ({
  type: PROFILE_REQUEST,
  isFetching: true,
});

export const receiveProfile = (response) => ({
  type: PROFILE_SUCCESS,
  isFetching: false,
  user: response,
});

export const profileError = (message) => ({
  type: PROFILE_FAILURE,
  isFetching: false,
  message,
});

export const requestEditProfile = () => ({
  type: EDIT_PROFILE_REQUEST,
  isFetching: true,
});

export const receiveEditProfile = (response) => ({
  type: EDIT_PROFILE_SUCCESS,
  isFetching: false,
  user: response,
});

export const editProfileError = (message) => ({
  type: EDIT_PROFILE_FAILURE,
  isFetching: false,
  message,
});

export const requestLoadProfile = () => ({
  type: GET_OTHER_PROFILE_REQUEST,
  isFetching: true,
});

export const receiveLoadProfile = (response) => ({
  type: GET_OTHER_PROFILE_SUCCESS,
  isFetching: false,
  otherUser: response,
});

export const loadProfileError = (message) => ({
  type: GET_OTHER_PROFILE_FAILURE,
  isFetching: false,
  message,
});
