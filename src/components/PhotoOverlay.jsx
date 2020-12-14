import React from 'react';

const PhotoOverlay = () => {
  const mainTextBlock = {
    display: 'inline-block',
    textAlign: 'center'
  };
  const mainHeaderStyle = {
    fontFamily: 'Marcellus, serif'
  };
  const strikethrough = {
    textDecorationLine: 'line-through'
  };
  //<span style={strikethrough}>February 28, 2021</span> 
  return (
    <div className='container'>
      <div style={mainTextBlock}>
        <h1 style={mainHeaderStyle}>Caitlin & Dimitar</h1>
        <h6>
          <strong>
            December 23, 2020   •   <span style={strikethrough}>Washington, DC</span> Zoom
          </strong>
        </h6>
      </div>
    </div>
  );
};

export default PhotoOverlay;