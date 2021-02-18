import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import iconLike from '../../assets/image/heart.svg';

const Post = ({ post }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { user, text, like } = post;
  const { username, id } = user;
  return (
    <div className="post">
      <h3>
        {isAuthenticated ? (
          <Link to={`/user/${id}`}>{username}</Link>
        ) : (
          <Link to="/login">John Doe</Link>
        )}
      </h3>
      <p>{text}</p>
      <div className="like-container">
        <p>{like}</p>
        <img src={iconLike} alt="Like" />
      </div>
    </div>
  );
};

export default Post;
