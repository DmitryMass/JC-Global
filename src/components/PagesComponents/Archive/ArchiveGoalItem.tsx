import { goalsStyle } from '@/styles/goalsStyles';
import { IGoals } from '@/types/goalsTypes';
import { FC, memo } from 'react';

interface IMonthGoalsItemProps {
  item: IGoals;
}

const ArchiveGoalItem: FC<IMonthGoalsItemProps> = ({
  item: { complete, goal },
}) => {
  return (
    <div
      className={`${
        complete ? 'bg-green-600' : 'bg-goalBlue'
      } rounded-[4px] mb-[10px] p-[10px] `}
    >
      <p className={goalsStyle.goalText}>{goal}</p>
    </div>
  );
};

export default memo(ArchiveGoalItem);
