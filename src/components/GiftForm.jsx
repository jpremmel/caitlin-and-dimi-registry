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

  const [gift, setGift] = useState({
    'name': '',
    'note': '',
    'public': false,
    'funds': {
      'honeymoon': {
        'checkbox': false,
        'amount': '',
        'style': hideAmount,
        'label': 'Honeymoon'
      },
      'loan': {
        'checkbox': false,
        'amount': '',
        'style': hideAmount,
        'label': 'Student Loan Debt'
      },
      'home': {
        'checkbox': false,
        'amount': '',
        'style': hideAmount,
        'label': 'Our First Home'
      },
      'therapy': {
        'checkbox': false,
        'amount': '',
        'style': hideAmount,
        'label': 'Therapy for Our Future Kids'
      }
    }
  });
  console.log(gift);

  const handleCheck = e => {
    setGift({
      ...gift,
      [e.target.id]: e.target.checked
    });
  };

  const handleTextChange = e => {
    setGift({
      ...gift,
      [e.target.id]: e.target.value
    });
  };
  
  const handleFundCheck = e => {
    e.target.checked ? (
      setGift({
        ...gift,
        'funds': {
          ...gift.funds,
          [e.target.name]: {
            ...gift.funds[e.target.name],
            'checkbox': e.target.checked,
            'style': {}
          }
        }
      })
    ) : (
      setGift({
        ...gift,
        'funds': {
          ...gift.funds,
          [e.target.name]: {
            ...gift.funds[e.target.name],
            'checkbox': e.target.checked,
            'amount': '',
            'style': hideAmount
          }
        }
      })
    );
  };

  const handleFundAmountChange = e => {
    setGift({
      ...gift,
      'funds': {
        ...gift.funds,
        [e.target.name] : {
          ...gift.funds[e.target.name],
          'amount': e.target.value
        }
      }
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
        //handleSubmit(); // TO DO: now that hook is working, just need to submit gift when dispatching the action
      }}>

        {/* FUNDS */}
        {Object.keys(gift.funds).map(fund => {
          return (
            <div key={fund} className='row input-field' style={{height: '45px'}}>
              <div className='col s4 l3 offset-s2 offset-l3'>
                <label>
                  <input
                    type='checkbox'
                    className='filled-in'
                    name={fund}
                    onChange={handleFundCheck}
                    checked={gift.funds[fund].checkbox}
                  />
                  <span style={checkboxMargin}>{gift.funds[fund].label}</span>
                </label>
              </div>
              <div className='col s4 l3'>
                <span style={gift.funds[fund].style}>$  
                  <input
                    type='number'
                    placeholder=' Amount' 
                    style={{width: '90%'}}
                    name={fund}
                    onChange={handleFundAmountChange}
                    value={gift.funds[fund].amount}
                  />
                </span>
              </div>
            </div>
          );
        })}

        {/* NAME */}
        <div className='input-field'>
          <input 
            id='name'
            type='text' 
            style={textInputStyle}
            placeholder='Your Name' 
            onChange={handleTextChange}
            value={gift.name}
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
            value={gift.note}
          />
        </div>

        {/* PUBLIC */}
        <div className='input-field section'>
          <p>
            <label style={wideInputStyle}>
              <input  
                type='checkbox' 
                className='filled-in' 
                id='public'
                onChange={handleCheck}
                checked={gift.public}
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