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
          float='right' />
        <FundCard
          title='Student Loan Debt'
          content='Something witty about crushing student loan debt'
          photo={LoanPhoto}
          float='left' />
      </div>
      <div className='row'>
        <FundCard
          title='Our First Home'
          content='Something cute about a house I guess'
          photo={HomePhoto}
          float='right' />
        <FundCard
          title='Therapy for Our Future Kids'
          content='Something witty about how these kids are screwed'
          photo={TherapyPhoto}
          float='left' />
      </div>
    </div>
  );
};

export default FundGrid;