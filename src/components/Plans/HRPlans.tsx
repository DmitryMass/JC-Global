import { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'HR вакансії.',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['PM', 'Trainee FE Dev', 'Middle BE (PHP/Laravel)'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Кількість вакансій',
      data: [2, 3, 2],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Кількість кандидатів',
      data: [14, 213, 83],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Кількість відібраних кандидатів',
      data: [4, 46, 24],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

const HRPlans: FC = () => {
  return <Bar options={options} data={data} />;
};

export default HRPlans;
