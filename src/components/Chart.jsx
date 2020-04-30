import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-labels';

const Chart = (props) => {

  useFirestoreConnect('totals');
  const fundTotals = useSelector(state => state.firestore.data['totals']);

  if (fundTotals) {
    const honeymoonTotal = fundTotals.funds.honeymoon;
    const loansTotal = fundTotals.funds.loans;
    const homeTotal = fundTotals.funds.home;
    const therapyTotal = fundTotals.funds.therapy;

    const chartData = {
      labels: ['Honeymoon', 'Student Loan Debt', 'Our First Home', 'Therapy for Our Future Kids'],
      datasets: [
        {
          backgroundColor: ['#ffd480', '#e6d7f4','#a6e8e6','#803370'],
          borderColor: ['#ffd480', '#ded7f4','#a6e8e6','#803370'],
          borderWidth: 2,
          data: [honeymoonTotal, loansTotal, homeTotal, therapyTotal]
        }
      ]
    };

    return (
      <div className='container'>
        <Doughnut 
          data={chartData}
          options={{
            tooltips: {
              bodyFontSize: 17,
              callbacks: {
                label: (tooltipItem, data) => {
                  const label = data.labels[tooltipItem['index']];
                  const dataset = data['datasets'][0];
                  const percent = Math.round((dataset['data'][tooltipItem['index']] / dataset['_meta'][0]['total']) * 100)
                  return `${label}: ${percent}%`;
                }
              }
            },
            plugins: {
              labels: {
                fontColor: 'black',
                fontSize: 14,
                fontStyle: 'bold'
              }
            },
            legend: {
              labels: {
                fontSize: 17,
                fontColor: 'black'
              }
            }
          }}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default compose(connect())(Chart);