import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component: TargetComponent, ...rest }) => {
  const { data } = useSelector((state) => state.auth);
  const accessToken = sessionStorage.getItem('@access_token');

  return (
    <Route
      {...rest}
      render={(props) =>
        data || accessToken ? (
          <TargetComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
