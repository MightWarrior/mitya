import React, { useEffect, useState } from 'react';
import Button from '../common/button';
import Input from '../common/input';
import Header from '../common/header';
import { useSelector } from 'react-redux';

const Login = (props) => {

  const {profileGet, user} = props;
  const [phone, setPhone] = useState(user && user.phone ? user.phone : 'Enter user phone');
  const [sex, setSex] = useState(user && user.sex ? user.sex: 'Enter user sex');
  const [city, setCity] = useState(user && user.city ? user.city: 'Enter user city');
  const [county, setCountry] = useState(user);
  const [status, setStatus] = useState(user);

  useEffect(() => {
    setPhone(phone);
    setSex(sex);
    setCity(city);
  }, [city, phone, sex])

  useEffect(() => {
    profileGet()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
<>
<center>
<Header />

<div className="auth-footer">
 
  <div className="side-inner">
  <div className="auth-body">
        <div className="form-group">
  <Input
          type="text"
            placeholder={`${user.phone}`}
            label="Phone"  
            onChangeValue={setPhone}
          />
           <Input
          type="text"
            placeholder={`${user.sex}`}
            label="Sex"  
            onChangeValue={setSex}
          />
           <Input
          type="text"
            placeholder={user.city}
            label="City"  
            onChangeValue={setCity}
          />
        </div>
    </div>
    </div>
    </div>
    </center>
</>
  );
};

export default Login;