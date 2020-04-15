import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import CoverPhoto from './CoverPhoto';
import Chart from './Chart';
import GiftForm from './GiftForm';

const App = () => {
  const mainHeaderStyle = {
    fontFamily: 'Marcellus, serif',
    marginBottom: '-100px'
  };
  return (
    <div>
      <div className='container'>
        <h1 style={mainHeaderStyle}>Caitlin & Dimitar</h1>
      </div>
      <CoverPhoto />
      <Chart />
      <GiftForm />
    </div>
  );
};

export default App;