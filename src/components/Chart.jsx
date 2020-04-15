import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = () => {
  const chartData = {
    labels: ['Honeymoon', 'Student Loan Debt', 'Our First Home', 'Therapy for Our Future Kids'],
    datasets: [
      {
        label: 'Amount',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [20, 40, 70, 50]
      }
    ]
  };

  return (
    <div className='container'>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Caitlin & Dimitar\'s Wedding Registry Funds',
            fontSize: 20
          },
          legend:{
            display: false
          }
        }}
      />
    </div>
  );
};

export default Chart;