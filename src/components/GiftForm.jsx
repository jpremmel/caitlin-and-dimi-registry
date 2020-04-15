import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const GiftForm = () => {
  return (
    <div className='container'>
      <form>
        <div className='input-field'>
          <input
            id='note'
            type='text'
            placeholder='Include a note to the happy couple'
          />
        </div>
      </form>
    </div>
  );
};

export default GiftForm;