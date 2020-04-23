import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = () => {

  const chartData = {
    labels: ['Honeymoon', 'Student Loan Debt', 'Our First Home', 'Therapy for Our Future Kids'],
    datasets: [
      {
        backgroundColor: ['#ffd480', '#e6d7f4','#a6e8e6','#803370'],
        borderColor: ['#ffd480', '#ded7f4','#a6e8e6','#803370'],
        borderWidth: 2,
        data: [20, 40, 70, 50]
      }
    ]
  };

  return (
    <div className='container'>
      <Doughnut 
        data={chartData}
        options={{
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
};

export default Chart;