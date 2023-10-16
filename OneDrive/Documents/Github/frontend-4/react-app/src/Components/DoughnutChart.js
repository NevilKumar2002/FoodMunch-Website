import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Component 1', 'Component 2', 'Component 3'],
  datasets: [
    {
      data: [30, 40, 30], // Adjust these values as needed
      backgroundColor: ['#FF5733', '#33FF57', '#5733FF'], // Define colors for each component
    },
  ],
};

const options = {
  legend: {
    display: false,
  },
};

const DoughnutChart = () => {
  return (
    <div className="doughnut-chart-container">
      <h2>Doughnut Chart with Components</h2>
      <div className="doughnut-chart">
        <Doughnut data={data} options={options} />
        <div className="chart-center-text">Heading in the Middle</div>
      </div>
    </div>
  );
};

export default DoughnutChart;
