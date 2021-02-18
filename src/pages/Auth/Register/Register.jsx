import React from 'react';
import { useHistory, Link } from 'react-router-dom';
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
    <div className="register-container">
      <div className="section-top">
        <Link to="/register">
          <span className="home" />
          Register
        </Link>
      </div>
      <div className="form-register-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" autoComplete="email" />
          <input
            type="Password"
            placeholder="password"
            autoComplete="current-password"
          />
          <button type="submit" className="btn-submit btn" value="Register">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
