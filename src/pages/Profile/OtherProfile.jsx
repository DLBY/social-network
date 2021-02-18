/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import OtherPost from '../../Components/Post/OtherPost';
import { loadProfile, getUserPost } from '../../redux';

const OtherProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const token = Cookies.get('id_token');
  const otherUser = useSelector((state) => state.profile.otherUser);
  const otherUserPosts = useSelector((state) => state.post.otherUserPosts);
  const { username, description, id } = otherUser;

  useEffect(() => {
    dispatch(loadProfile(token, userId));
    dispatch(getUserPost(token, userId));
  }, [token, dispatch, userId]);
  return (
    <section className="section-otherprofil">
      <div className="profile-top">
        <h1> {username}&apos;s profile</h1>
        <h4>Username :{username}</h4>
        <h4>Description :{description}</h4>
      </div>
      <hr />
      {otherUserPosts &&
        otherUserPosts.map((post) => (
          <OtherPost create={post.created_at} text={post.text} />
        ))}
    </section>
  );
};

export default OtherProfile;
