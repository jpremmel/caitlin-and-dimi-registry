import React, { useState } from 'react';

const FundCheckbox = ({ fundName }) => {

  //TO DO: Use local state hook to make it so that amount field only shows up when the checkbox is checked
  const [checked, setChecked] = useState(false);
  const handleClick = () => {setChecked(!checked)};
  
  let amountInput = '';
   if (checked) {
    amountInput = <span>$  
      <input
        type='number'
        placeholder=' Amount' 
        style={{width: '90%'}}
      />
    </span>;
   }

  const checkboxMargin = {
    marginRight: '15px',
    marginTop: '10px'
  };

  return (
    <div className='row input-field' style={{height: '45px'}}>
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
        {amountInput}
      </div>
    </div>
  );
};

export default FundCheckbox;