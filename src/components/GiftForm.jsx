import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const GiftForm = () => {

  const headerStyle = {
    textAlign: 'center'
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
        input[type=number] {
          width: 20%;
        }
        .checkboxLabel {
          margin-right: 15px;
        }
        textarea {
          width: 80%;
        }
      `}</style>
      <h3 style={headerStyle}>Add a Gift to the Registry</h3>
      <form>
        <div className='input-field'>
          <input type='text' placeholder='Your Name' />
        </div>
        <div className='input-field'>
          <p>
            <label>
              <input type='checkbox' className='filled-in' />
              <span className='checkboxLabel'>Honeymoon</span>
              <span>
                $  <input type='number' placeholder='Amount' />
              </span>
            </label>
          </p>
        </div>
        <div className='input-field'>
          <p>
            <label>
              <input type='checkbox' className='filled-in' />
              <span className='checkboxLabel'>Student Loan Debt</span>
              <span>
                $  <input type='number' placeholder='Amount' />
              </span>
            </label>
          </p>
        </div>
        <div className='input-field'>
          <p>
            <label>
              <input type='checkbox' className='filled-in' />
              <span className='checkboxLabel'>Our First Home</span>
              <span>
                $  <input type='number' placeholder='Amount' />
              </span>
            </label>
          </p>
        </div>
        <div className='input-field'>
          <p>
            <label>
              <input type='checkbox' className='filled-in' />
              <span className='checkboxLabel'>Therapy for Our Future Kids</span>
              <span>
                $  <input type='number' placeholder='Amount' />
              </span>
            </label>
          </p>
        </div>
        <div className='input-field'>
          <textarea className='materialize-textarea' placeholder='Include a note to the happy couple' />
        </div>
        <div className='input-field'>
          <p>
            <label>
              <input type='checkbox' className='filled-in' />
              <span className='checkboxLabel'>Publicly display my note, name, and which fund(s) I chose (the amount contributed will not be displayed)</span>
            </label>
          </p>
        </div>
        <button style={btnStyle} className='waves-effect waves-light btn-small'>Add My Gift</button>
      </form>
    </div>
  );
};

export default GiftForm;