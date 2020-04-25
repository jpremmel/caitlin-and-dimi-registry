import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-labels';

const Chart = () => {

  const chartData = {
    labels: ['Honeymoon', 'Student Loan Debt', 'Our First Home', 'Therapy for Our Future Kids'],
    datasets: [
      {
        backgroundColor: ['#ffd480', '#e6d7f4','#a6e8e6','#803370'],
        borderColor: ['#ffd480', '#ded7f4','#a6e8e6','#803370'],
        borderWidth: 2,
        data: [2, 2, 1, 5]
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
};

export default Chart;