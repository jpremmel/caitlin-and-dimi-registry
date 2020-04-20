import React from 'react';

const FundCheckbox = ({ fundName }) => {

  const checkboxMargin = {
    marginRight: '15px'
  };

  return (
    <div className='input-field'>
      <style jsx>{`
        input[type=number] {
          width: 20%;
        }
      `}</style>
      <p>
        <label>
          <input type='checkbox' className='filled-in' />
          <span style={checkboxMargin}>{fundName}</span>
          <span>
            $  <input type='number' placeholder='Amount' />
          </span>
        </label>
      </p>
    </div>
  );
};

export default FundCheckbox;