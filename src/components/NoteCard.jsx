import React from 'react';

const NoteCard = ({ color, note, name }) => {

  const badges = {
    marginBottom: '15px',
    display: 'inline-block'
  };

  return (
    <div className='card' style={{ backgroundColor: color}}>
      <div className='card-content'>
        <p>{note}</p>
        <div style={badges}>
          <span className='card-title' style={{ textAlign: 'right'}}>- {name}</span>
          <span className='new badge' data-badge-caption='Honeymoon'></span>
          <span className='new badge' data-badge-caption='Student Loan Debt'></span>
          <span className='new badge' data-badge-caption='Our First Home'></span>
          <span className='new badge' data-badge-caption='Therapy for Our Future Kids'></span>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;