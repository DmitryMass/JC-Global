import { FC, useState } from 'react';
import { teamStyles } from '@/styles/teamStyles';

const fakeData = [
  {
    id: 1,
    time: '8:00 - 18:00',
    data: '20.05.2023',
    active: false,
  },
  {
    id: 2,
    time: '8:00 - 18:00',
    data: '21.05.2023',
    active: false,
  },
  {
    id: 3,
    time: '8:00 - 18:00',
    data: '22.05.2023',
    active: false,
  },
  {
    id: 4,
    time: '8:00 - 18:00',
    data: '22.05.2023',
    active: false,
  },
  {
    id: 5,
    time: '8:00 - 18:00',
    data: '22.05.2023',
    active: false,
  },
  {
    id: 6,
    time: '8:00 - 18:00',
    data: '22.05.2023',
    active: false,
  },
  {
    id: 7,
    time: '8:00 - 18:00',
    data: '22.05.2023',
    active: false,
  },
  {
    id: 8,
    time: '8:00 - 18:00',
    data: '22.05.2023',
    active: false,
  },
];

const TeamMemberSchedule: FC = () => {
  return (
    <div className={'bg-white rounded-[6px] p-[20px] shadow-md'}>
      <span className='font-bold mb-[20px] block'>
        Добавить проверку даты. Если сегодняшняя дата не совпадает с той что в
        списке, нельзя будет отметится
      </span>
      <div className='grid grid-cols-7 gap-[30px] max-[992px]:grid-cols-5 max-[576px]:grid-cols-3 max-[400px]:grid-cols-2'>
        {fakeData.map(({ active, id, time, data }: any) => (
          <div className='flex flex-col items-center gap-[5px]' key={id}>
            <span className='text-sm font-bold text-gray'>{data}</span>
            <span className='text-sm font-bold'>{time}</span>
            <button
              className={`${
                active ? 'bg-green-500' : 'bg-red-500'
              } text-sm font-semibold text-white leading-sm p-[5px] rounded-[6px]`}
            >
              Відмітка
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberSchedule;
