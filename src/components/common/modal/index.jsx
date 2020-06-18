import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const {
    children, isModalOpen, handleModalClose, additionalClassName
  } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const { createPortal } = ReactDOM;

  const modalContainerClassName = isModalVisible ? 'modal-container open' : 'modal-container';
  const modalClassName = `modal ${additionalClassName}`;

  useEffect(() => {
    setModalVisible(isModalOpen);
  }, [isModalOpen, isModalVisible]);

  if (!isModalVisible) {
    return null;
  }
  return (
    isModalVisible ?
      createPortal(
        <div className={ modalContainerClassName }>
          <div className="modal-overlay" onClick={ handleModalClose } />
          <div className={ modalClassName }>
            { children }
          </div>
        </div>,
        document.body)
      : null
  );
};

export default Modal;
