import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { editProfile } from '../../redux';

const Profile = () => {
  const userProfile = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(false);
  const { id, username: userName, email, description } = userProfile;

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
  return (
    <div>
      <h1>Profile</h1>
      <h4>{userName}</h4>
      <h4>{email}</h4>
      <button type="button" onClick={() => setEditForm(!editForm)}>
        {editForm ? 'Close' : 'Edit'}
      </button>
      {editForm && (
        <form onSubmit={(e) => handleSubmitEdit(e)}>
          <input type="text" name="username" defaultValue={userName} />
          <input type="text" name="description" defaultValue={description} />
          <input type="submit" className="btn-submit" value="Save" />
        </form>
      )}
    </div>
  );
};
export default Profile;
