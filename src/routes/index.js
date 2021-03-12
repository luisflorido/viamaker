import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthRoute from 'components/AuthRoute';

const Login = lazy(() => import('./Login'));
const School = lazy(() => import('./School'));

function Routes() {
  return (
    <Router>
      <Switch>
        <AuthRoute exact path="/" component={School} />
        <AuthRoute exact path="/school" component={School} />
        <AuthRoute path="/school/:id" component={School} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
