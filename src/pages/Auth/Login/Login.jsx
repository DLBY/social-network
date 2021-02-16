import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      identifier: e.target[0].value,
      password: e.target[1].value,
    };
    dispatch(loginUser(userData));
  };

  return (
    <div>
      <h1>Hello im Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" placeholder="email" autoComplete="email" />
        <input
          type="password"
          placeholder="password"
          autoComplete="current-password"
        />
        <input type="submit" className="btn-submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
