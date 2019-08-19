import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import getCurrentUser from '../utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (getCurrentUser() ? (
      <Component {...props} user={getCurrentUser()} />
    ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ))
    }
  />
);

export default PrivateRoute;