import React, { useCallback } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { 
  updateFundCheckbox, 
  updateFundAmountInput, 
  updateCheckbox, 
  updateTextInput, 
  submitGiftForm
} from '../actions';
import Modal from './Modal';

const GiftForm = ({ gift, dispatch }) => {

  const firestore = useFirestore();
  const handleSubmit = useCallback(
    (e, gift) => {
      e.preventDefault();
      dispatch(submitGiftForm({ firestore }, gift));
    },
    [firestore]
  );

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
      <form onSubmit={e => { handleSubmit(e, gift); }}>

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
                    onChange={(event) => {dispatch(updateFundCheckbox(event, gift));}}
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
                    onChange={(event) => {dispatch(updateFundAmountInput(event, gift));}}
                    value={gift.funds[fund].amount}
                    required={gift.funds[fund].checkbox}
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
            onChange={(event) => {dispatch(updateTextInput(event, gift));}}
            value={gift.name}
            required={gift.public}
          />
        </div>

        {/* NOTE */}
        <div className='input-field'>
          <textarea
            id='note'
            style={wideInputStyle}
            className='materialize-textarea'
            placeholder='Include a note to the happy couple'
            onChange={(event) => {dispatch(updateTextInput(event, gift));}}
            value={gift.note}
            required={gift.public}
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
                onChange={(event) => {dispatch(updateCheckbox(event, gift));}}
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
      <Modal />
    </div>
  );
};

const mapStateToProps = state => ({
  gift: state.gift
});

export default connect(mapStateToProps)(GiftForm);