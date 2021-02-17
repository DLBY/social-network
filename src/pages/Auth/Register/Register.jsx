import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    dispatch(registerUser(userData));
    history.push('/');
  };

  return (
    <div>
      <h1>Hello im Register</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" autoComplete="email" />
        <input
          type="Password"
          placeholder="password"
          autoComplete="current-password"
        />
        <input type="submit" className="btn-submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
