import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AuthRoute from 'components/AuthRoute';

const Login = lazy(() => import('./Login'));
const School = lazy(() => import('./School'));
const Class = lazy(() => import('./Class'));
const Student = lazy(() => import('./Student'));

function Routes() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <AuthRoute exact path="/" component={School} />
        <AuthRoute exact path="/school" component={School} />
        <AuthRoute exact path="/school/:id" component={School} />
        <AuthRoute exact path="/school/:id/class" component={Class} />
        <AuthRoute exact path="/school/:id/class/:idClass" component={Class} />
        <AuthRoute
          exact
          path="/school/:id/class/:idClass/student"
          component={Student}
        />
        <AuthRoute
          exact
          path="/school/:id/class/:idClass/student/:idStudent"
          component={Student}
        />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
