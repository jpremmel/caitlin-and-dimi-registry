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
  const position = {
    marginBottom: '-170px'
    // display: 'inline-block'
  };
  const marcellusFont = {
    fontFamily: 'Marcellus, serif'
  };
  return (
    <div>
      <div className='container' style={position}>
          <h1 style={marcellusFont}>Caitlin & Dimitar</h1>
          <h6>February 28, 2021</h6>
      </div>
      <div style={coverPhotoStyle}>
      </div>
    </div>
  );
};

export default Photo;