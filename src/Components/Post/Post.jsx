import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = ({ username, text, postUserId }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="post">
      <h3>
        {isAuthenticated ? (
          <Link to={`/user/${postUserId}`}>{username}</Link>
        ) : (
          <Link to="/login">John Doe</Link>
        )}
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default Post;
