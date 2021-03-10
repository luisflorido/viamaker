import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthRoute from 'components/AuthRoute';

const Login = lazy(() => import('./Login'));

function Routes() {
  return (
    <Router>
      <Switch>
        <AuthRoute exact path="/" component={Login} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
