import React from 'react';
import FundCard from './FundCard';
import HoneymoonPhoto from '../images/honeymoon.jpg';
import TherapyPhoto from '../images/therapy.jpg';
import LoanPhoto from '../images/loan.jpg';
import HomePhoto from '../images/home.jpg';

const FundGrid = () => {
  return (
    <div className='container'>
      <div className='row'>
        <FundCard
          title='Honeymoon'
          content="Because he'll need some rest, relaxation, and several drinks to gear up for this marriage"
          photo={HoneymoonPhoto}
          float='right'
          color='#ffe6b3' />
        <FundCard
          title='Student Loan Debt'
          content='She will be busy saving the world, so he is stuck paying the debt for both'
          photo={LoanPhoto}
          float='left'
          color='#e6d7f4' />
      </div>
      <div className='row'>
        <FundCard
          title='Our First Home'
          content='Gotta love that DC housing market...'
          photo={HomePhoto}
          float='right'
          color='#a6e8e6' />
        <FundCard
          title='Therapy for Our Future Kids'
          content='(and maybe for Dimi)'
          photo={TherapyPhoto}
          float='left'
          color='#904d82' />
      </div>
    </div>
  );
};

export default FundGrid;