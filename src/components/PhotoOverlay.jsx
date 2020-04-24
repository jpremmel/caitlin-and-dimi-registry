import React from 'react';

const PhotoOverlay = () => {
  const mainTextBlock = {
    display: 'inline-block',
    textAlign: 'center'
  };
  const mainHeaderStyle = {
    fontFamily: 'Marcellus, serif',
    fontSize: '5.6rem',
    marginTop: '3.8rem'
  };
  return (
      <div className='container'>
        <div style={mainTextBlock}>
          <h1 style={mainHeaderStyle}>Caitlin & Dimitar</h1>
          <h6><strong>February 28, 2021   •   Washington, DC</strong></h6>
        </div>
      </div>
  );
};

export default PhotoOverlay;