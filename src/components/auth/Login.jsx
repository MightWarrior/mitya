import React from 'react';

import Auth from './index';
import LoginForm from './LoginFormContainer';

const Login = () => {
  return (
    <Auth>
      <div className="modal">
        <LoginForm />
      </div>
    </Auth>
  );
};

export default Login;