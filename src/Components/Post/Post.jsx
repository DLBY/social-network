/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import iconLike from '../../assets/image/heart.svg';

const Post = ({ post }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // eslint-disable-next-line camelcase
  const { user, text, like, created_at } = post;
  const { username, id } = user;
  return (
    <div className="post">
      <div className="post-margin" />
      {isAuthenticated ? (
        <Link to={`/user/${id}`}>
          {username} <span className="alias">@{username}</span>
        </Link>
      ) : (
        <Link to="/login">John Doe</Link>
      )}
      <p>{text}</p>
      <div className="like-bot">
        <div className="like-container">
          <p>{like}</p>
          <img src={iconLike} alt="Like" className="iconLike" />
        </div>
        <small>{moment(created_at).startOf().fromNow()}</small>
      </div>
    </div>
  );
};

export default Post;
