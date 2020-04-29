import React, { useCallback, useState } from 'react';
import { submitGiftForm } from '../actions';
import { useFirestore } from 'react-redux-firebase';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';

const GiftForm = () => {
  // const firestore = useFirestore();
  // const dispatch = useDispatch();
  // const handleSubmit = useCallback(
  //   gift => dispatch(submitGiftForm({ firestore }, gift)),
  //   [firestore]
  // );

  const hideAmount = {
    display: 'none'
  };

  const [giftSubmission, setGiftSubmission] = useState({
    'honeymoon': {
      'checkbox': false,
      'amount': '',
      'style': hideAmount
    },
    'loan': {
      'checkbox': false,
      'amount': '',
      'style': hideAmount
    },
    'home': {
      'checkbox': false,
      'amount': '',
      'style': hideAmount
    },
    'therapy': {
      'checkbox': false,
      'amount': '',
      'style': hideAmount
    },
    'name': '',
    'note': '',
    'public': false
  });
  console.log(giftSubmission);
  
  const handleFundCheck = e => {
    e.target.checked ? (
      setGiftSubmission({
        ...giftSubmission,
        [e.target.name]: {
          'checkbox': e.target.checked,
          'amount': giftSubmission[e.target.name].amount,
          'style': {}
        }
      })
    ) : (
      setGiftSubmission({
        ...giftSubmission,
        [e.target.name]: {
          'checkbox': e.target.checked,
          'amount': '',
          'style': hideAmount
        }
      })
    );
  };

  const handleFundAmountChange = e => {
    setGiftSubmission({
      ...giftSubmission,
      [e.target.name] : {
        'checkbox': giftSubmission[e.target.name].checkbox,
        'amount': e.target.value
      }
    });
  };

  const handleCheck = e => {
    setGiftSubmission({
      ...giftSubmission,
      [e.target.id]: e.target.checked
    });
  };

  const handleTextChange = e => {
    setGiftSubmission({
      ...giftSubmission,
      [e.target.id]: e.target.value
    });
  };

  const checkboxMargin = {
    marginRight: '15px',
    marginTop: '10px'
  };
  const textInputStyle = {
    width: '35%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  const wideInputStyle = {
    width: '60%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  const btnStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#803370'
  };

  return (
    <div className='container'>
      <style jsx>{`
        .input-field input[type=text]:focus, .input-field textarea:focus {
          border-bottom: 1px solid #803370;
          box-shadow: 0 1px 0 0 #803370;
        }
        [type=checkbox].filled-in:checked+span:not(.lever):after {
          border: 2px solid #803370;
          background-color: #803370;
        }
        input[type=number]:not(.browser-default):focus {
          border-bottom: 1px solid #803370;
          box-shadow: 0 1px 0 0 #803370;
        }
      `}</style>
      <form onSubmit={e => {
        e.preventDefault();
        //handleSubmit(); // TO DO: now that hook is working, just need to submit giftSubmission when dispatching the action
      }}>

        {/* HONEYMOON */}
        <div className='row input-field' style={{height: '45px'}}>
          <div className='col s4 l3 offset-s2 offset-l3'>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                name='honeymoon'
                onChange={handleFundCheck}
                checked={giftSubmission.honeymoon.checkbox}
              />
              <span style={checkboxMargin}>Honeymoon</span>
            </label>
          </div>
          <div className='col s4 l3'>
            <span style={giftSubmission.honeymoon.style}>$  
              <input
                type='number'
                placeholder=' Amount' 
                style={{width: '90%'}}
                name='honeymoon'
                onChange={handleFundAmountChange}
                value={giftSubmission.honeymoon.amount}
              />
            </span>
          </div>
        </div>

        {/* STUDENT LOAN DEBT */}
        <div className='row input-field' style={{height: '45px'}}>
          <div className='col s4 l3 offset-s2 offset-l3'>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                name='loan'
                onChange={handleFundCheck}
                checked={giftSubmission.loan.checkbox}
              />
              <span style={checkboxMargin}>Student Loan Debt</span>
            </label>
          </div>
          <div className='col s4 l3'>
            <span style={giftSubmission.loan.style}>$  
              <input
                type='number'
                placeholder=' Amount' 
                style={{width: '90%'}}
                name='loan'
                onChange={handleFundAmountChange}
                value={giftSubmission.loan.amount}
              />
            </span>
          </div>
        </div>

        {/* OUR FIRST HOME */}
        <div className='row input-field' style={{height: '45px'}}>
          <div className='col s4 l3 offset-s2 offset-l3'>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                name='home'
                onChange={handleFundCheck}
                checked={giftSubmission.home.checkbox}
              />
              <span style={checkboxMargin}>Our First Home</span>
            </label>
          </div>
          <div className='col s4 l3'>
            <span style={giftSubmission.home.style}>$  
              <input
                type='number'
                placeholder=' Amount' 
                style={{width: '90%'}}
                name='home'
                onChange={handleFundAmountChange}
                value={giftSubmission.home.amount}
              />
            </span>
          </div>
        </div>

        {/* THERAPY FOR OUR FUTURE KIDS */}
        <div className='row input-field' style={{height: '45px'}}>
          <div className='col s4 l3 offset-s2 offset-l3'>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                name='therapy'
                onChange={handleFundCheck}
                checked={giftSubmission.therapy.checkbox}
              />
              <span style={checkboxMargin}>Therapy for Our Future Kids</span>
            </label>
          </div>
          <div className='col s4 l3'>
            <span style={giftSubmission.therapy.style}>$  
              <input
                type='number'
                placeholder=' Amount' 
                style={{width: '90%'}}
                name='therapy'
                onChange={handleFundAmountChange}
                value={giftSubmission.therapy.amount}
              />
            </span>
          </div>
        </div>

        {/* NAME */}
        <div className='input-field'>
          <input 
            id='name'
            type='text' 
            style={textInputStyle}
            placeholder='Your Name' 
            onChange={handleTextChange}
            value={giftSubmission.name}
          />
        </div>

        {/* NOTE */}
        <div className='input-field'>
          <textarea
            id='note'
            style={wideInputStyle}
            className='materialize-textarea'
            placeholder='Include a note to the happy couple'
            onChange={handleTextChange}
            value={giftSubmission.note}
          />
        </div>

        {/* PUBLIC? */}
        <div className='input-field section'>
          <p>
            <label style={wideInputStyle}>
              <input  
                type='checkbox' 
                className='filled-in' 
                id='public'
                onChange={handleCheck}
                checked={giftSubmission.public}
              />
              <span className='checkboxLabel'>
                Publicly display my note, name, and which fund(s) I chose (the amount contributed will not be displayed)
              </span>
            </label>
          </p>
        </div>
        <button 
          style={btnStyle} 
          className='btn waves-effect waves-light'>
            <i className="material-icons left">
              card_giftcard
            </i>
          Add My Gift
        </button>
      </form>
    </div>
  );
};

export default GiftForm;