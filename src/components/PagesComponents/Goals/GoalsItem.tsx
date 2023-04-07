import { FC, memo } from 'react';
import { useArchivedCompanyGoalMutation } from '@/store/api/goalsApi';
//
import MonthGoalsItem from './MonthGoalsItem';
import Loader from '@/components/Loader/Loader';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
//
import { convertDate } from '@/utils/additionalFunc/dateConvert';
import { archive } from '@/data/svgStore';
//
import { IGoals, IGoalsTypes } from '@/types/goalsTypes';
import { CustomError } from '@/types/errors';
//
import { goalsStyle } from '@/styles/goalsStyles';

interface IGoalsItemProps {
  item: IGoalsTypes;
}

const GoalsItem: FC<IGoalsItemProps> = ({
  item: { archived, createdAt, goals, month, _id },
}) => {
  const [archivedGoals, { isLoading, isError, error }] =
    useArchivedCompanyGoalMutation();
  const created = convertDate(createdAt);
  const admin = true;

  return (
    <div className={goalsStyle.goalsItemWrapper}>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <div className='flex justify-between items-center mb-[20px]'>
        <h3 className={goalsStyle.month}>{month}</h3>
        <div className='flex items-center gap-[10px]'>
          {admin ? (
            <button onClick={() => archivedGoals(_id as string)}>
              {isLoading ? (
                <Loader />
              ) : (
                <img className='w-[30px]' src={archive} alt='archived' />
              )}
            </button>
          ) : null}
          <span className='text-sm leading-sm font-medium text-gray'>
            {created}
          </span>
        </div>
      </div>
      {!archived
        ? goals.map((item: IGoals) => (
            <MonthGoalsItem mainId={_id as string} key={item.id} item={item} />
          ))
        : null}
    </div>
  );
};

export default memo(GoalsItem);
