import React, { useState } from 'react';

const FundCheckbox = ({ fundName }) => {

  const [checked, setChecked] = useState(false);
  const handleClick = () => {setChecked(!checked)};
  
  let amountDisplay = {};
   if (!checked) {
    amountDisplay = {
      display: 'none'
    };
   }

  const checkboxMargin = {
    marginRight: '15px',
    marginTop: '10px'
  };

  return (
    <div className='row input-field' style={{height: '45px'}}>
      <style jsx>{`
        [type=checkbox].filled-in:checked+span:not(.lever):after {
          border: 2px solid #803370;
          background-color: #803370;
        }
        input[type=number]:not(.browser-default):focus {
          border-bottom: 1px solid #803370;
          box-shadow: 0 1px 0 0 #803370;
        }
      `}</style>
      <div className='col s4 l3 offset-s2 offset-l3'>
        <label>
          <input
            type='checkbox'
            className='filled-in'
            onClick={handleClick}
          />
          <span style={checkboxMargin}>{fundName}</span>
        </label>
      </div>
      <div className='col s4 l3'>
        <span style={amountDisplay}>$  
          <input
            type='number'
            placeholder=' Amount' 
            style={{width: '90%'}}
          />
        </span>
      </div>
    </div>
  );
};

export default FundCheckbox;