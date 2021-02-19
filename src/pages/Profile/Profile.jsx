import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { editProfile, getUserPost, delPost } from '../../redux';
import OtherPost from '../../Components/Post/OtherPost';

const Profile = () => {
  const userProfile = useSelector((state) => state.profile.user);
  const userPosts = useSelector((state) => state.post.otherUserPosts);
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(false);
  const { id, username: userName, email, description } = userProfile;
  const token = Cookies.get('id_token');

  useEffect(() => {
    dispatch(getUserPost(token, id));
  }, [dispatch, id, token]);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const user = {
      id,
      name: e.target[0].value,
      description: e.target[1].value,
      token: Cookies.get('id_token'),
    };
    dispatch(editProfile(user));
    setEditForm(!editForm);
  };

  const handleDelPost = (e, postId) => {
    e.preventDefault();
    dispatch(delPost(token, postId));
    console.log('test del');
  };

  return (
    <div className="profile-section">
      <div className="section-top">
        <Link to="/profile">
          <span className="home">Profile</span>
        </Link>
      </div>
      <div className="profile-top">
        <h4>{userName}</h4>
        <h4>{email}</h4>
        <h4>{description}</h4>
      </div>
      <div className="profile-bot">
        <button
          className="profile-btn"
          type="button"
          onClick={() => setEditForm(!editForm)}
        >
          {editForm ? 'Close' : 'Edit'}
        </button>
      </div>
      {editForm && (
        <div className="profile-edit-form">
          <form onSubmit={(e) => handleSubmitEdit(e)}>
            <input type="text" name="username" defaultValue={userName} />
            <input type="text" name="description" defaultValue={description} />
            <div>
              <button type="submit" className="btn-primary">
                Edit
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="break" />
      {userPosts &&
        userPosts.map((post) => (
          <div>
            <OtherPost
              create={post.created_at}
              text={post.text}
              key={post.id}
            />
            <button
              type="button"
              className="btn-send"
              onClick={(e) => handleDelPost(e, post.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};
export default Profile;
