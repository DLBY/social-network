/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';

export const checkAuth = () => !!Cookies.get('id_token');

export const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

export const PublicRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )
    }
  />
);
