import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import CoverPhoto from './CoverPhoto';
import Navbar from './Navbar';
import PageHeader from './PageHeader';
import Chart from './Chart';
import GiftForm from './GiftForm';

const App = () => {
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
      <CoverPhoto />
      <Navbar />
      <PageHeader headerText='Test Header Title' />
      <Chart />
      <GiftForm />
    </div>
  );
};

export default App;