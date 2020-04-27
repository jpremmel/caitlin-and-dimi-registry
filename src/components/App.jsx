import React, { useRef, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import CoverPhoto from '../images/CoverPhoto.jpg';
import PhotoOverlay from './PhotoOverlay';
import Navbar from './Navbar';
import PageHeader from './PageHeader';
import Chart from './Chart';
import NoteCardList from './NoteCardList';
import GiftForm from './GiftForm';

const App = () => {

  useEffect(() => {
    // Initialize materialize parallax animation when App mounts
    var parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax, {});

    // Initialize materialize tabs animation when App mounts
    var tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);
  }, []);

  const parallaxHeight = `
    .parallax-container {
      height: 700px;
    }
  `;

  const coverPhotoStyle = {
    // width: '100%'
  };

  return (
    <div>
      <style>{parallaxHeight}</style>
      <div className='parallax-container'>
        <div className='parallax' >
          <img src={CoverPhoto} style={coverPhotoStyle} />
        </div>
        <PhotoOverlay />
      </div>
      <div style={{ marginBottom: '40px'}}>
        <Navbar />
        <div id='registry'>
          <PageHeader headerText="Wedding Registry Funds: Current Status" />
          <Chart />
        </div>
        <div id='form'>
          <PageHeader headerText='Add a Gift' />
          <GiftForm />
        </div>
        <div id='notes'>
          <PageHeader headerText='Notes from Loved Ones' />
          <NoteCardList />
        </div>
      </div>
    </div>
  );
};

export default App;