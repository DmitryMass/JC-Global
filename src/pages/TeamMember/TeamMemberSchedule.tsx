import { FC } from 'react';
import { format } from 'date-fns';
//
import {
  IMarkTheShiftData,
  useMarkTheShiftMutation,
} from '@/store/api/employeesApi';
//
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import Loader from '@/components/Loader/Loader';
//
import { CustomError } from '@/types/errors';
import { optionLabel } from '@/data/scheduleDate';
import { IEmployee } from '@/types/employee';

const TeamMemberSchedule: FC<{ data: IEmployee; id: string }> = ({
  data: { schedule },
  id,
}) => {
  const [markTheShift, { isLoading, isError, error }] =
    useMarkTheShiftMutation();

  const handleMark = async ({
    id,
    dayWorked,
    dayWorkedCount,
    month,
    date,
  }: IMarkTheShiftData) => {
    const todayDay = format(new Date(), 'dd.MM.yyyy');
    if (todayDay !== date) {
      return alert(
        'Не можливо відмітитись, оскільки сьогоднішня дата не співпадає з відміченою'
      );
    }
    await markTheShift({
      id,
      dayWorked,
      dayWorkedCount,
      month,
      date,
    });
  };

  return (
    <div className={'bg-white rounded-[6px] p-[20px] shadow-md relative'}>
      {isLoading ? (
        <span className='fixed flex justify-center items-center w-full h-full inset-0 bg-darkBlue bg-opacity-40'>
          <Loader />
        </span>
      ) : null}
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <h2 className='text-l leading-l font-bold mb-[20px]'>Графік роботи</h2>
      {schedule?.map((monthSchedule) => {
        for (let month in monthSchedule) {
          const dates = monthSchedule[month];
          return (
            <div className='mb-[25px]' key={month}>
              <h3 className='mb-[10px] text-black font-semibold ml-[7px]'>
                {month}
              </h3>
              <div className='grid grid-cols-7 max-[992px]:grid-cols-5 max-[576px]:grid-cols-3 max-[400px]:grid-cols-2 gap-[3px]'>
                {dates.map(({ date, schedule, dayWorked }) => (
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
                    {optionLabel.includes(schedule) ? null : (
                      <button
                        onClick={
                          !dayWorked
                            ? () =>
                                handleMark({
                                  id,
                                  month,
                                  date,
                                  dayWorked: true,
                                  dayWorkedCount: 1,
                                })
                            : undefined
                        }
                        className={`${
                          dayWorked ? 'bg-green-500' : 'bg-red-500'
                        } text-sm font-semibold text-white leading-sm p-[5px] rounded-[6px] flex-1`}
                      >
                        Відмітка
                      </button>
                    )}
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

{
}

export default TeamMemberSchedule;
