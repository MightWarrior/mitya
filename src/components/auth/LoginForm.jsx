import React, {useEffect, useState} from 'react';
import Button from '../common/button';
import Input from '../common/input';
import Password from '../common/password';
import { withRouter } from 'react-router-dom';

const LoginForm = (props) => {
  const { location, clearAuthValidationErrors, loginUser } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    loginUser({email, password});
  };

  return (
    <form action="/" className="form auth-form">
      <h1 className="auth-title">Log In</h1>
      <div className="auth-body">
        <div className="form-group">
          <Input
            type="text"
            placeholder="Enter your email or username"
            label="Username"
            onChangeValue={setEmail}
          />
        </div>
        <div className="form-group">
          <Password
            placeholder="Enter your password"
            label="Password"
            onChangeValue={setPassword}
          />
        </div>
      </div>
      <div className="auth-footer">
        <Button
          btnClassName="btn-primary"
          text="Log in"
          onClick={handleClick}
          disabled={!email || !password}
        />
      </div>
    </form>
  )
};

export default withRouter(LoginForm);
