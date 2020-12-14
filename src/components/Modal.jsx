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
          PayPal (including major credit cards): <a href='https://www.paypal.com/paypalme/marriageisexpensive' target='_blank' rel='noopener noreferrer'>paypal.me/marriageisexpensive</a>
        </p>
        <p>
          Venmo: <a href='https://account.venmo.com/u/Dimitar-Georgiev' target='_blank' rel='noopener noreferrer'>@Dimitar-Georgiev</a>
        </p>
        <div>
          <p style={{ marginBottom: '0' }}>Mail a check:</p>
          <p style={{ marginTop: '0', marginBottom: '0' }}>3033 Wilson Blvd, Ste. E</p>
          <p style={{ marginTop: '0', marginBottom: '0' }}>Box 123</p>
          <p style={{ marginTop: '0' }}>Arlington, VA 22201</p>
        </div>
        <button 
          style={btnStyle} 
          className='btn waves-effect waves-light'
          onClick={() => { dispatch({ type: 'HIDE_MODAL' }); }} >
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