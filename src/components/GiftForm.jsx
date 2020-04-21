import React from 'react';
import FundCheckbox from './FundCheckbox';

const GiftForm = () => {

  const headerStyle = {
    textAlign: 'center'
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
    marginBottom: '40px'
  };

  return (
    <div className='container'>
      <h3 style={headerStyle}>Add a Gift to the Registry</h3>
      <form>
        <div className='section'>
          <FundCheckbox fundName='Honeymoon' />
          <FundCheckbox fundName='Student Loan Debt' />
          <FundCheckbox fundName='Our First Home' />
          <FundCheckbox fundName='Therapy for Our Future Kids' />
        </div>
          <div className='input-field'>
            <input type='text' placeholder='Your Name' style={textInputStyle} />
          </div>
          <div className='input-field'>
            <textarea
              style={wideInputStyle}
              className='materialize-textarea'
              placeholder='Include a note to the happy couple'
            />
          </div>
        <div className='input-field section'>
          <p>
            <label style={wideInputStyle}>
              <input type='checkbox' className='filled-in' />
              <span className='checkboxLabel'>
                Publicly display my note, name, and which fund(s) I chose (the amount contributed will not be displayed)
              </span>
            </label>
          </p>
        </div>
        <button style={btnStyle} className='btn waves-effect waves-light'><i className="material-icons left">card_giftcard</i>Add My Gift</button>
      </form>
    </div>
  );
};

export default GiftForm;