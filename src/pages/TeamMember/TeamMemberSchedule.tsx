import { FC } from 'react';
import { useEditSchedule } from '@/hooks/useEditSchedule';
//
//
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import Loader from '@/components/Loader/Loader';
//
import { CustomError } from '@/types/errors';
import { optionLabel } from '@/data/scheduleDate';
import { IEmployee } from '@/types/employee';
import { teamStyles } from '@/styles/teamStyles';
import FixedLoader from '@/components/FixedLoader/FixedLoader';

const TeamMemberSchedule: FC<{ data: IEmployee; id: string }> = ({
  data: { schedule },
  id,
}) => {
  const { handleMemberMark, isLoading, isError, error } = useEditSchedule();

  return (
    <div className={'bg-white rounded-[6px] p-[20px] shadow-md relative'}>
      {isLoading ? <FixedLoader /> : null}
      {isError && (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
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
              <h3 className='mb-[10px] text-black font-semibold ml-[7px]'>
                {month}
              </h3>
              <div className={teamStyles.gridWrapper}>
                {dates.map(({ date, schedule, dayWorked }) => (
                  <div
                    className={teamStyles.workDayFlexWrapperMember}
                    key={date}
                  >
                    <div className={teamStyles.workDayFlexInfoWrapper}>
                      <span className='text-sm font-bold text-black text-opacity-70 mb-[15px]'>
                        {date}
                      </span>
                      <span className='text-sm font-bold  text-blue-600 flex-shrink'>
                        {schedule}
                      </span>
                    </div>
                    {optionLabel.includes(schedule) ? null : (
                      <button
                        onClick={
                          !dayWorked
                            ? () =>
                                handleMemberMark({
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
                        } ${teamStyles.workDayMemberBtn}  `}
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
