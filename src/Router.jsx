import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';

import history from './services/history';
import Login from './components/auth/Login';
import ProtectedRoute from './ProtectedRoute';
import ModesList from './components/modes';
import { ROUTES } from './constants';

const MainRouter = () => (
  <Router history={history}>
      <Switch>
          <Route path={ROUTES.LOGIN_ROUTE} component={Login}/>
          <ProtectedRoute path={ROUTES.INDEX} component={ModesList}/>
          </Switch>
  </Router>
);

export default MainRouter;

