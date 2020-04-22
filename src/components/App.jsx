import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import CoverPhoto from './CoverPhoto';
import Navbar from './Navbar';
import PageHeader from './PageHeader';
import Chart from './Chart';
import GiftForm from './GiftForm';

const App = () => {
  return (
    <div style={{ marginBottom: '40px'}}>
      <CoverPhoto />
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
          path='/gift-form' 
          render={() => 
            <div>
              <PageHeader headerText='Add A Gift' />
              <GiftForm />
            </div>
          } />
      </Switch>
    </div>
  );
};

export default App;