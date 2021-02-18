import React from 'react';

const OtherPost = ({ create, text, postUserId }) => (
  <div className="post">
    <h2>{create}</h2>
    <p>{text}</p>
  </div>
);

export default OtherPost;
