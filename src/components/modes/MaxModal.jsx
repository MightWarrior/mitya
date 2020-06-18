import React, { useState, useEffect } from 'react';
import Modal from '../../components/common/modal';
import Button from '../../components/common/button';
import CustomScrollbar from '../../components/common/scrollbar';

const MaxModal = (props) => {

  const {
    isModalOpen, handleClose, data
  } = props;


  return (
    <Modal additionalClassName="large" isModalOpen={ isModalOpen } handleModalClose={ handleClose } { ...props }>
      <div className="modal-header">
        <h2 className="modal-title">Max stat </h2>
        <button className="modal-close" onClick={ handleClose }>
          <span className="icon-close" />
        </button>
      </div>
      <CustomScrollbar className="modal-body">
        <section className="modal-content">
          <h3 className="modal-subtitle">{'Product'}</h3>
          <div className="details">
            <ul className="details-list">
              <li className="details-item form-group">
                <div className="details-value">
                  <div className="inputs-group">
                      <div className="inputs-group-item">Id</div>
                      <div className="inputs-group-item">
                        {data._id ? data._id : null}
                      </div>
                      <div className="inputs-group-item">Name</div>
                      <div className="inputs-group-item">
                        {data.title ? data.title: null}
                      </div>
                      <div className="inputs-group-item">Cost</div>
                      <div className="inputs-group-item">
                        {data.cost ? data.cost: null}
                      </div>
                      <div className="inputs-group-item">Store</div>
                      <div className="inputs-group-item">
                        {data.store ? data.store: null}
                      </div>
                      <div className="inputs-group-item">Was bought </div>
                      <div className="inputs-group-item">
                        {data.wasBought ? data.wasBought: null}
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
        </div>
      </div>
    </Modal>
  );
};

export default MaxModal;
