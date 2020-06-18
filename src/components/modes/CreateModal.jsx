import React, { useState, useEffect } from 'react';
import Modal from '../../components/common/modal';
import Button from '../../components/common/button';
import Input from '../common/input';
import CustomScrollbar from '../../components/common/scrollbar';
import {getId} from '../../services/validation';

const CreateModal = (props) => {

  const {
    isModalOpen, handleClose, handleSave, store
  } = props;

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentCost, setCurrentCost] = useState(0);

  return (
    <Modal additionalClassName="large" isModalOpen={ isModalOpen } handleModalClose={ handleClose } { ...props }>
      <div className="modal-header">
        <h2 className="modal-title">Create mode</h2>
        <button className="modal-close" onClick={ handleClose }>
          <span className="icon-close" />
        </button>
      </div>
      <CustomScrollbar className="modal-body">
        <section className="modal-content">
          <h3 className="modal-subtitle">{'Your mode'}</h3>
          <div className="details">
            <ul className="details-list">
              <li className="details-item form-group">
                <div className="details-value">
                  <div className="inputs-group">
                      <div className="inputs-group-item">
                        <Input
          type="text"
            placeholder={`Enter the title`}
            label="Phone"  
            onChangeValue={setCurrentTitle}
          />
           <Input
          type="text"
            placeholder={`Enter the cost`}
            label="Sex"  
            onChangeValue={setCurrentCost}
          />
                    </div>
                </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </CustomScrollbar>
      <div className="modal-footer">
        <div className="inputs-group">
          <div className="inputs-group-item">
            <Button type="button" text="Cancel" onClick={ handleClose } />
          </div>
          <div className="inputs-group-item">
          <Button btnClassName="btn-primary" type="button" text="Save"  onClick={ () => {handleSave({title: currentTitle, cost: currentCost, wasBought: 0, store, _id: getId(), __v: 0}); handleClose()}}/>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateModal;
