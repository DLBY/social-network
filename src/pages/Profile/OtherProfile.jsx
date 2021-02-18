/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadProfile } from '../../redux';

const OtherProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const token = Cookies.get('id_token');
  const otherUser = useSelector((state) => state.profile.otherUser);
  const { username, description, id } = otherUser;

  useEffect(() => {
    dispatch(loadProfile(token, userId));
  }, [token, dispatch, userId]);
  return (
    <div>
      <h3> Welcome on Users Profile</h3>
      <h4>Id:{id}</h4>
      <h4>Username :{username}</h4>
      <h4>Description :{description}</h4>
    </div>
  );
};

export default OtherProfile;
