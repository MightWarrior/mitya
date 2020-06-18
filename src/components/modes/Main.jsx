/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Button from '../common/button';
import Input from '../common/input';
import Header from '../common/header';
import Accordion from '../common/accordion';
import MaxModal from './MaxModal';
import CreateModal from './CreateModal';
import { useSelector } from 'react-redux';

const Login = (props) => {

  const {profileGet, user, isProfileToggled, maxItem, maxGet, productsGet, products, basket, productChoose, total, productDelete, productCreate, needRefresh, refreshMax, productsBuy, profileEdit} = props;
  const [phone, setPhone] = useState('');
  const [sex, setSex] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('');
  const [isMaxOpen, setMaxOpen] = useState(false);
  const [isBuyOpen, setBuyOpen] = useState(false);
  const [isCreateOpen, setCreateOpen] = useState(false);

  useEffect(() => {
    profileGet();
    maxGet();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    maxGet();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshMax])

  useEffect(() => {
    if(needRefresh){
    profileGet();
    if(user && user.user && user.user.role === 'salesman'){
      productsGet(user.store);
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needRefresh])

  useEffect(() => {
    if(user && user.user && user.user.role === 'salesman'){
      productsGet(user.store);
    }
  }, [user])

  const toggleMenu = () => {
    setMaxOpen(!isMaxOpen);
  };

  const handleClose = () => {
    setMaxOpen(false);
  }

  const toggleCreate = () => {
    setCreateOpen(!isCreateOpen);
  }

  const closeCreate = () => {
    setCreateOpen(false);
  }

  const handleClick = () => {

  }

  const renderProducts = products!== undefined ?
  <section className="side-section">
    <Accordion title={`Products`}
      isAccordionOpen={products.length > 0}
      disabled={products.length < 0}
    >
      <ul className="visitors">
        {products.map(mode => (
          <li className="visitors-item" key={`${mode._id}`}>
            <div role="button" className="visitors-btn" onClick={() => {productChoose(mode)}}>
              { ` ${mode.title} Cost - ${mode.cost}`}
            </div>
          </li>
        ))}
      </ul>
    </Accordion>
  </section> : null;


const renderBasket = basket!== undefined ?
  <section className="side-section">
    <Accordion title={`Basket     Total - ${total}`}
      isAccordionOpen={basket.length > 0}
      disabled={basket.length < 0}
    >
      <ul className="visitors">
        {basket.map(mode => (
          <li className="visitors-item" key={`${mode._id}`}>
            <div role="button" className="visitors-btn" onClick={() => {productDelete(mode)}}>
              { ` ${mode.title} Cost - ${mode.cost}`}
            </div>
          </li>
        ))}
      </ul>
    </Accordion>
  </section> : null;


  return (
<>
<center>
<Header />

<div className="auth-footer">
 
  <div className="side-inner">
  <div className="auth-body">
    {isProfileToggled  && user && user.user && user.user.role === 'salesman' ? 
    <>
      <Input
      type="text"
        placeholder={`${user.user.name}`}
        label="Name"  
        disabled
      />
       <Input
      type="text"
        placeholder={`${user.user.role}`}
        label="Role"  
        disabled
      />
      </>
    : isProfileToggled &&
    <>
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
          <Input
          type="text"
            placeholder={`${user.country}`}
            label="Country"  
            onChangeValue={setCountry}
          />
          <Input
          type="text"
            placeholder={`${user.status}`}
            label="Status"  
            onChangeValue={setStatus}
          />
          <div className="auth-footer">
        <Button
          btnClassName="btn-primary"
          text="Update profile"
          onClick={ () => {profileEdit({
            city: city ==='' ? user.city : city,
            sex: sex === '' ? user.sex : sex,
            status: status === '' ? user.status : status,
            phone : phone === '' ? user.phone : phone,
            country : country === '' ? user.country : country,
            dob: "2000-04-10",
            income: 100000
          })}}
        />
      </div>
        </div>
        </>}
        <div className="auth-footer">
        <Button
          btnClassName="btn-primary"
          text="Show max stat product"
          onClick={() => toggleMenu()}
        />
      </div>
      {user && user.user && user.user.role === 'salesman' ?
      <>
      <div className="auth-footer">
        <Button
          btnClassName="btn-primary"
          text="Create product"
          onClick={() => toggleCreate()}
        />
      </div>
      {renderProducts}
      {renderBasket}
      <div className="auth-footer">
        <Button
          btnClassName="btn-primary"
          text="Checkout"
          onClick={() => productsBuy({store: user.store, products: basket.map(a => a._id), boughtBy: "5ec25bcc1581e33a2c180c11"})}
        />
      </div>
      </> : null }
    </div>
    </div>
    </div>
    </center>

    <MaxModal handleClose={handleClose} isModalOpen={isMaxOpen} data={maxItem}/>
    <CreateModal handleClose={closeCreate} isModalOpen={isCreateOpen} store={user.store} handleSave={productCreate}/>
</>
  );
};

export default Login;