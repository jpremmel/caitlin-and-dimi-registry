import React, { useRef, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import CoverPhoto from '../images/CoverPhoto.jpg';
import PhotoOverlay from './PhotoOverlay';
import Navbar from './Navbar';
import PageHeader from './PageHeader';
import Chart from './Chart';
import NoteCardList from './NoteCardList';
import GiftForm from './GiftForm';
// import Footer from './Footer';

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
        <Switch>
          <Route 
            exact 
            path='/' 
            render={() => 
              <div>
                <PageHeader headerText="Caitlin & Dimitar's Wedding Registry Funds" />
                <Chart />
              </div>
            } />
          <Route  
            path='/notes' 
            render={() => 
              <div>
                <PageHeader headerText='Notes from Loved Ones' />
                <NoteCardList />
              </div>
            } />
          <Route  
            path='/gift-form' 
            render={() => 
              <div>
                <PageHeader headerText='Add A Gift' />
                <GiftForm />
              </div>
            } />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;