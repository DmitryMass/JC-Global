import { FC, memo } from 'react';
//
import MonthGoalsItem from './MonthGoalsItem';
//
import { IGoals, IGoalsTypes } from '@/types/goalsTypes';
//
import { goalsStyle } from '@/styles/goalsStyles';
import GoalsAndArchiveItemTitle from '../GoalsAndArchiveItemTitle';

interface IGoalsItemProps {
  item: IGoalsTypes;
}

const GoalsItem: FC<IGoalsItemProps> = ({
  item: { createdAt, goals, month, _id },
}) => {
  return (
    <div className={goalsStyle.goalsItemWrapper}>
      <GoalsAndArchiveItemTitle
        _id={_id as string}
        createdAt={createdAt}
        month={month}
      />
      {goals.length
        ? goals.map((item: IGoals) => (
            <MonthGoalsItem mainId={_id as string} key={item.id} item={item} />
          ))
        : null}
    </div>
  );
};

export default memo(GoalsItem);
