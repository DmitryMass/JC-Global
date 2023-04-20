import { FC, memo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'; //
import { monthLabels } from '@/data/additionalData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface IPlansProps {
  plan: string[] | null;
  active: string[] | null;
  title: string;
}

const Plans: FC<IPlansProps> = ({ active, plan, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  const data = {
    labels: monthLabels,
    datasets: [
      {
        fill: true,
        label: 'План',
        data: plan,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Виконано',
        data: active,
        borderColor: 'rgb(53, 196, 97)',
        backgroundColor: 'rgb(53, 196, 97, 0.5)',
      },
    ],
  };
  return <Line className='h-full' options={options} data={data} />;
};

export default memo(Plans);
