import { FC, memo } from 'react';
import { useEditSchedule } from '@/hooks/useEditSchedule';
//
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import Loader from '@/components/Loader/Loader';
import FixedLoader from '@/components/FixedLoader/FixedLoader';
//
import { IEmployee } from '@/types/employee';
import { CustomError } from '@/types/errors';
import { teamStyles } from '@/styles/teamStyles';
import { useArchiveSchedule } from '@/hooks/useArchiveSchedule';
import { archive } from '@/data/svgStore';

const TMScheduleGeneral: FC<{ data: IEmployee; id: string }> = ({
  data: { schedule },
  id,
}) => {
  const {
    inputRef,
    user,
    editInput,
    setEditInput,
    isLoading,
    isError,
    error,
    handleMark,
  } = useEditSchedule();

  const {
    handleArchive,
    isError: isArchiveError,
    isLoading: isArchiveLoading,
    error: isReqError,
  } = useArchiveSchedule();

  return (
    <div className={'bg-white rounded-[6px] p-[20px] shadow-md relative'}>
      {isArchiveLoading ? <FixedLoader /> : null}
      {isError && (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      )}
      {isArchiveError && (
        <ErrorModal
          isError={isArchiveError}
          error={(isReqError as CustomError)?.data?.msg}
        />
      )}
      <h2 className='text-l leading-l font-bold mb-[20px]'>Графік роботи</h2>
      {schedule?.map((monthSchedule) => {
        for (let month in monthSchedule) {
          const dates = [...monthSchedule[month]].sort(
            (a, b) => parseFloat(a.date) - parseFloat(b.date)
          );
          return (
            <div className='mb-[25px]' key={month}>
              <div className='flex items-center gap-[10px] w-full mb-[10px] ml-[7px]'>
                <h3 className=' text-black font-semibold '>{month}</h3>
                {user?.role === 'admin' && (
                  <button
                    onClick={() =>
                      handleArchive({ id, date: dates[0].date, month })
                    }
                  >
                    <img
                      className='w-[25px] h-[25px]'
                      src={archive}
                      alt='archive'
                    />
                  </button>
                )}
              </div>
              <div className={teamStyles.gridWrapper}>
                {dates.map(({ date, schedule }) => (
                  <div
                    className={teamStyles.workDayFlexWrapperGeneral}
                    key={date}
                  >
                    <span className='text-sm font-bold text-black text-opacity-70 flex-1'>
                      {date}
                    </span>
                    {editInput === date ? (
                      <>
                        {isLoading ? <Loader /> : null}
                        <input
                          ref={inputRef}
                          type='text'
                          className={teamStyles.workDayInput}
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
                          className={teamStyles.workDayAdminEditBtn}
                        >
                          {editInput === date ? 'Зберегти' : 'Редагувати'}
                        </button>
                        {editInput === date ? (
                          <button
                            onClick={() => setEditInput('1')}
                            className={teamStyles.workDayAdminEditBtn}
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
