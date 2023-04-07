import { FC, memo } from 'react';
import { IGoals, IGoalsTypes } from '@/types/goalsTypes';
import { convertDate } from '@/utils/additionalFunc/dateConvert';
import MonthGoalsItem from './MonthGoalsItem';
import { goalsStyle } from '@/styles/goalsStyles';

interface IGoalsItemProps {
  item: IGoalsTypes;
}

const GoalsItem: FC<IGoalsItemProps> = ({
  item: { archived, createdAt, goals, month },
}) => {
  const created = convertDate(createdAt);
  return (
    <div className={goalsStyle.goalsItemWrapper}>
      <div className='flex justify-between items-center mb-[20px]'>
        <h3 className={goalsStyle.month}>{month}</h3>
        <span>{created}</span>
      </div>
      {goals.length
        ? goals.map((item: IGoals) => (
            <MonthGoalsItem key={item.id} item={item} />
          ))
        : null}
    </div>
  );
};

export default memo(GoalsItem);
