import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      identifier: e.target[0].value,
      password: e.target[1].value,
    };
    dispatch(loginUser(userData));
    history.push('/');
  };

  return (
    <div>
      <div className="section-top">
        <Link to="/login">
          <span className="home" />
          Login
        </Link>
      </div>
      <div className="form-register-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="email" placeholder="email" autoComplete="email" />
          <input
            type="password"
            placeholder="password"
            autoComplete="current-password"
          />
          <button type="submit" className="btn-submit btn" value="Login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
