import React from 'react';
import { connect } from 'react-redux';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({ children, showModal, dispatch }) => {
  console.log('Modal should be showing: ', showModal);
  let content;
  if (showModal) {
    content = showModal && (
      <div className='overlay'>
        <div className='modal-wrapper'>
          <button
            className='modal-close' 
            onClick={() => { dispatch({ type: 'HIDE_MODAL' }) }} >
            X
          </button>
          <div className='modal-body'>
            {children}
          </div>
        </div>
      </div>
    );
  }
  return createPortal(content, document.body);
};

const mapStateToProps = state => ({
  showModal: state.modal
});

export default connect(mapStateToProps)(Modal);