import React from 'react';
import CoverPhoto from '../images/CoverPhoto.jpg';

const Photo = () => {
  var coverPhotoStyle = {
    backgroundImage: `url(${CoverPhoto})`,
    backgroundAttachment: 'fixed',
    height: '700px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
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
    <div style={coverPhotoStyle}>
      <div className='container'>
        <div style={mainTextBlock}>
          <h1 style={mainHeaderStyle}>Caitlin & Dimitar</h1>
          <h6><strong>February 28, 2021   •   Washington, DC</strong></h6>
        </div>
      </div>
    </div>
  );
};

export default Photo;