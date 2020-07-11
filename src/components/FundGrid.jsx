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
          content='Something funny about how honeymoons are expensive'
          photo={HoneymoonPhoto}
          float='right'
          color='#ffe6b3' />
        <FundCard
          title='Student Loan Debt'
          content='Something dramatic about crushing student loan debt'
          photo={LoanPhoto}
          float='left'
          color='#e6d7f4' />
      </div>
      <div className='row'>
        <FundCard
          title='Our First Home'
          content='Something cute about a house I guess'
          photo={HomePhoto}
          float='right'
          color='#a6e8e6' />
        <FundCard
          title='Therapy for Our Future Kids'
          content='Something witty about how these kids are screwed'
          photo={TherapyPhoto}
          float='left'
          color='#904d82' />
      </div>
    </div>
  );
};

export default FundGrid;