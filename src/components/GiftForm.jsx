import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const GiftForm = () => {

  return (
    <div className='container'>

      <style jsx>{`
        input[type=number] {
          width: 150px;
        }
        .checkboxLabel {
          margin-right: 15px;
        }
      `}</style>
      
      <form>

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

      </form>
    </div>
  );
};

export default GiftForm;