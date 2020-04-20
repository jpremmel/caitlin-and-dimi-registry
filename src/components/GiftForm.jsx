import React from 'react';
import FundCheckbox from './FundCheckbox';

const GiftForm = () => {

  const headerStyle = {
    textAlign: 'center'
  };
  const textareaWidth = {
    width: '80%'
  };
  const btnStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '30px'
  };

  return (
    <div className='container'>
      <style jsx>{`
        input[type=text] {
          width: 50%;
        }
      `}</style>
      <h3 style={headerStyle}>Add a Gift to the Registry</h3>
      <form>
        <div className='input-field'>
          <input type='text' placeholder='Your Name' />
        </div>
        <FundCheckbox fundName='Honeymoon' />
        <FundCheckbox fundName='Student Loan Debt' />
        <FundCheckbox fundName='Our First Home' />
        <FundCheckbox fundName='Therapy for Our Future Kids' />
        <div className='input-field'>
          <textarea
            style={textareaWidth}
            className='materialize-textarea'
            placeholder='Include a note to the happy couple'
          />
        </div>
        <div className='input-field'>
          <p>
            <label>
              <input type='checkbox' className='filled-in' />
              <span className='checkboxLabel'>
                Publicly display my note, name, and which fund(s) I chose (the amount contributed will not be displayed)
              </span>
            </label>
          </p>
        </div>
        <button style={btnStyle} className='waves-effect waves-light btn-small'>
          Add My Gift
        </button>
      </form>
    </div>
  );
};

export default GiftForm;