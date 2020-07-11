import React from 'react';

const FundCard = ({ photo, title, content, float, color }) => {
  return (
    <div className='col s6'>
      <div 
        className='card medium' 
        style={{ 
          maxWidth: '300px', 
          float: float, 
          backgroundColor: color
        }} >
        <div className='card-image'>
          <img src={photo} style={{ objectFit: 'cover', maxHeight: '240px' }} />
        </div>
        <div className='card-content'>
          <span className='card-title' style={{ fontFamily: 'Marcellus, serif', textAlign: 'center' }}>{title}</span>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;