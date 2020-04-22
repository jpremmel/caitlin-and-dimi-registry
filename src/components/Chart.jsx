import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = () => {

  const chartData = {
    labels: ['Honeymoon', 'Student Loan Debt', 'Our First Home', 'Therapy for Our Future Kids'],
    datasets: [
      {
        label: 'Percentage of total gift funds',
        backgroundColor: ["#ffd480", "#e6d7f4","#a6e8e6","#803370"],
        borderColor: ["#ffd480", "#ded7f4","#a6e8e6","#803370"],
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
          title: {
            display: true,
            text: 'Caitlin & Dimitar\'s Wedding Registry Funds',
            fontSize: 20
          }
        }}
      />
    </div>
  );
};

export default Chart;