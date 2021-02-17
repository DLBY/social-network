import React from 'react';
import { useSelector } from 'react-redux';

const Post = ({ username, text }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="post">
      <h2>{isAuthenticated ? username : 'John Doe'}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Post;
