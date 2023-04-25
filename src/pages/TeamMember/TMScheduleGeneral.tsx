import { FC } from 'react';
import { IEmployee } from '@/types/employee';

const TMScheduleGeneral: FC<{ data: IEmployee }> = ({ data: { schedule } }) => {
  return (
    <div className={'bg-white rounded-[6px] p-[20px] shadow-md relative'}>
      <h2 className='text-l leading-l font-bold mb-[20px]'>Графік роботи</h2>
      {schedule?.map((monthSchedule) => {
        for (let month in monthSchedule) {
          const dates = [...monthSchedule[month]].sort(
            (a, b) => parseFloat(a.date) - parseFloat(b.date)
          );
          return (
            <div className='mb-[25px]' key={month}>
              <h3 className='mb-[10px] text-black font-semibold ml-[7px]'>
                {month}
              </h3>
              <div className='grid grid-cols-7 max-[992px]:grid-cols-5 max-[576px]:grid-cols-3 max-[400px]:grid-cols-2 gap-[3px]'>
                {dates.map(({ date, schedule }) => (
                  <div
                    className='flex flex-col items-center gap-[10px] px-[5px] py-[10px] rounded-[6px] bg-blue-300 '
                    key={date}
                  >
                    <span className='text-sm font-bold text-black text-opacity-70 flex-1'>
                      {date}
                    </span>
                    <span className='text-sm font-bold flex-1 text-blue-600'>
                      {schedule}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TMScheduleGeneral;
