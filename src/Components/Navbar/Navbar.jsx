import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <Link to="/social_network" className="logo">
        Social Network
      </Link>

      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isAuthenticated && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {isAuthenticated && (
          <button type="button" onClick={() => dispatch(logout())}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
