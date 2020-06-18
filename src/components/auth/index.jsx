import React from 'react';

const Auth = (props) => {
  const { children } = props;

  return (
    <div className="auth">
      <div className="auth-content">
        { children }
      </div>
    </div>
  );
};

export default Auth;