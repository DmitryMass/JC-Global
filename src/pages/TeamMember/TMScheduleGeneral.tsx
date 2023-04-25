import { FC, memo, useRef, useState } from 'react';
import { useMarkTheShiftMutation } from '@/store/api/employeesApi';
//
import { IEmployee } from '@/types/employee';
import { IMarkTheShiftData } from '@/types/scheduleTypes';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import { CustomError } from '@/types/errors';
import Loader from '@/components/Loader/Loader';

const TMScheduleGeneral: FC<{ data: IEmployee; id: string }> = ({
  data: { schedule },
  id,
}) => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const [editInput, setEditInput] = useState<string>('1');
  const inputRef = useRef<any>('');
  const [markTheShift, { isLoading, isError, error }] =
    useMarkTheShiftMutation();

  const handleMark = async ({ id, month, date }: IMarkTheShiftData) => {
    const value = inputRef.current?.value;
    if (value.length && value.trim()) {
      await markTheShift({
        id,
        month,
        date,
        schedule: value,
      });
      setEditInput('1');
      return;
    }
    alert('Помилка. Пусте поле.');
  };
  return (
    <div className={'bg-white rounded-[6px] p-[20px] shadow-md relative'}>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
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
              <div className='grid grid-cols-7 max-[992px]:grid-cols-4 max-[768px]:grid-cols-3 max-[576px]:grid-cols-2 max-[400px]:grid-cols-1 gap-[3px]'>
                {dates.map(({ date, schedule }) => (
                  <div
                    className='flex flex-col items-center gap-[5px] min-h-[150px] px-[5px] py-[10px] rounded-[6px] bg-blue-300'
                    key={date}
                  >
                    <span className='text-sm font-bold text-black text-opacity-70 flex-1'>
                      {date}
                    </span>
                    {editInput === date ? (
                      <>
                        {isLoading ? <Loader /> : null}
                        <Loader />
                        <input
                          ref={inputRef}
                          type='text'
                          className='bg-white text-blue-600 text-sm font-semibold rounded-[6px] w-full px-[5px] py-[3px] outline-none'
                        />
                      </>
                    ) : (
                      <span className='text-sm font-bold flex-1 text-blue-600'>
                        {schedule}
                      </span>
                    )}
                    {user?.role === 'admin' ? (
                      <>
                        <button
                          onClick={
                            editInput === date
                              ? () => handleMark({ id, month, date })
                              : () => setEditInput(date)
                          }
                          className='bg-blue-600 py-[3px] px-[5px] rounded-[6px] text-white block w-full text-sm font-semibold'
                        >
                          {editInput === date ? 'Зберегти' : 'Редагувати'}
                        </button>
                        {editInput === date ? (
                          <button
                            onClick={() => setEditInput('1')}
                            className='bg-blue-600 py-[3px] px-[5px] rounded-[6px] text-white block w-full text-sm font-semibold'
                          >
                            Відміна
                          </button>
                        ) : null}
                      </>
                    ) : null}
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

export default memo(TMScheduleGeneral);
