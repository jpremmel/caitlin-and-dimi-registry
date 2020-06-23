import React from 'react';
import { connect } from 'react-redux';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({ showModal, dispatch }) => {

  const btnStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#803370'
  };

  const content = showModal && (
    <div className='overlay'>
      <div className='modal-body'>
        <p>Thank you SO much for contributing to our wedding registry! Your gift information has been added to the fund tracking system. Here are your options for sending your gift to the bride & groom:</p>
        <p>
          Send via <a href='https://venmo.com/' target='_blank' rel='noopener noreferrer'>Venmo</a>
        </p>
        <p>
          Send via <a href='https://www.paypal.com/us/home' target='_blank' rel='noopener noreferrer'>PayPal</a>
        </p>
        <p>Mail a check</p>
        <button 
          style={btnStyle} 
          className='btn waves-effect waves-light'
          onClick={() => { dispatch({ type: 'HIDE_MODAL' }) }} >
          <i className='large material-icons left'>
            {/* trending_up */} close
          </i>
          Close
        </button>
      </div>
    </div>
  );
  return createPortal(content, document.body);
};

const mapStateToProps = state => ({
  showModal: state.modal
});

export default connect(mapStateToProps)(Modal);