import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, idToken, ...rest }) => (
  <Route {...rest} render={(props) => (
    idToken
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login'
      }} />
  )} />
);

const mapStateToProps = (state) => ({
  idToken: state.authReducer.idToken,
});

export default connect(mapStateToProps)(ProtectedRoute);
