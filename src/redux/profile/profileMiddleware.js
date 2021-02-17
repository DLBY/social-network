/* eslint-disable import/prefer-default-export */
import {
  profileError,
  receiveProfile,
  requestProfile,
  requestEditProfile,
  receiveEditProfile,
  editProfileError,
} from './profileActions';

export const profileUser = (token) => (dispatch) => {
  console.log('token:', token);
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  dispatch(requestProfile());
  fetch('http://localhost:1337/users/me', config)
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(profileError(response.message));
      } else {
        dispatch(receiveProfile(response));
        console.log('response profile:', response);
      }
    });
};

export const editProfile = (user) => (dispatch) => {
  const userData = {
    username: user.name,
    description: user.description,
  };

  const config = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  dispatch(requestEditProfile);
  fetch(`http://localhost:1337/users/${user.id}`, config)
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode) {
        dispatch(editProfileError(response.message));
      } else {
        dispatch(receiveEditProfile(response));
        console.log('response edit:', response);
      }
    });
};
