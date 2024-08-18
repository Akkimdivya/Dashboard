import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [300, 50, 100],
        backgroundColor: ['#e74c3c', '#3498db', '#f1c40f'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
