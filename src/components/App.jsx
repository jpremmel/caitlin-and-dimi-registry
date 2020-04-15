import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import CoverPhoto from './CoverPhoto';

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
    </div>
  );
};

export default App;