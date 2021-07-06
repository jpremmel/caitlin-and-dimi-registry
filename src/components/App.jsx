import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import CoverPhoto from '../images/CoverPhoto.jpg';
import PhotoOverlay from './PhotoOverlay';
import Navbar from './Navbar';
import PageHeader from './PageHeader';
import FundGrid from './FundGrid';
import Chart from './Chart';
import NoteCardList from './NoteCardList';
import GiftForm from './GiftForm';
import './App.css';


const App = () => {

  useEffect(() => { // When App mounts, do the following:
    // Initialize materialize parallax
    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax, {});

    // Initialize materialize tabs
    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);
  }, []);

  const coverPhotoStyle = {
    maxWidth: '100%'
  };

  return (
    <div>
      <div className='parallax-container'>
        <div className='parallax' >
          <img src={CoverPhoto} style={coverPhotoStyle} />
        </div>
        <PhotoOverlay />
      </div>
      <div>
        <Navbar />
        <div id='registry'>
          <PageHeader headerText='Welcome to our wedding registry!' />
          <div className='container' style={{fontSize: '17px', padding: '0 40px 30px' }}>
            <p>Instead of a typical registry at a store, we'd like our guests to help us decide how best to invest in what will surely be a very expensive life together. Our wedding gift funds are:</p>
          </div>
          <FundGrid />
          <PageHeader headerText="Wedding Registry Funds: Current Status" />
          <Chart />
          <footer class="page-footer" style={{ 
            backgroundColor: '#803370', 
            textAlign: 'center', 
            paddingTop: '0',
            marginTop: '40px'
          }}>
            <div class="footer-copyright">
              <div class="container">
                <a 
                  id="brittany-link"
                  href='https://brittanyformaryland.com' 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  style={{ color: '#fff'}} >
                  Check out the next campaign Caitlin is working on!
                </a>
              </div>
            </div>
          </footer>
        </div>
        <div id='form' style={{ marginBottom: '40px' }}>
          <PageHeader headerText='Add a Gift' />
          <GiftForm />
        </div>
        <div id='notes' style={{ marginBottom: '40px' }}>
          <PageHeader headerText='Notes from Loved Ones' />
          <NoteCardList />
        </div>
      </div>
    </div>
  );
};

export default App;