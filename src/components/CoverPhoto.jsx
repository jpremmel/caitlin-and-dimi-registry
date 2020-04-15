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
  return (
    <div style={coverPhotoStyle}></div>
  );
};

export default Photo;