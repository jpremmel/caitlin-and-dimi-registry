import React from 'react';
import './FundCard.css';

const FundCard = ({ photo, title, content, float, color }) => {
  
  const handleClick = () => {
    const formTab = document.getElementById('form-tab');
    formTab.click();
  };

  return (
    <div className='col s6 fund'>
      <div 
        className='card medium' 
        onClick={handleClick}
        style={{ 
          maxWidth: '300px', 
          float: float, 
          backgroundColor: color
        }} >
        <div className='card-image'>
          <img src={photo} style={{ objectFit: 'cover', maxHeight: '240px' }} />
        </div>
        <div className='card-content' style={{ textAlign: 'center' }}>
          <span className='card-title' style={{ fontFamily: 'Marcellus, serif' }}>{title}</span>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;