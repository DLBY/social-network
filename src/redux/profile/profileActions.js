import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
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
