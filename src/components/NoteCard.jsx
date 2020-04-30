import React from 'react';

const NoteCard = ({ color, note, name }) => {
  return (
    <div className='card' style={{ backgroundColor: color}}>
      <div className='card-content'>
        <p>{note}</p>
        <span className='card-title' style={{ textAlign: 'right'}}>- {name}</span>
        <span className='new badge' data-badge-caption='Therapy'></span>
      </div>
    </div>
  );
};

export default NoteCard;