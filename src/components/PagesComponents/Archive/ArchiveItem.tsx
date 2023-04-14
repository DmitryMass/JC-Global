import { FC, memo, useState } from 'react';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import GoalsAndArchiveItemTitle from '../GoalsAndArchiveItemTitle';
import ArchiveGoalItem from './ArchiveGoalItem';
//
import { IGoalsTypes } from '@/types/goalsTypes';
import { goalsStyle } from '@/styles/goalsStyles';
import { IGoals } from '@/types/goalsTypes';
import { openFolder } from '@/data/svgStore';

interface IGoalsItemProps {
  item: IGoalsTypes;
}
const ArchiveItem: FC<IGoalsItemProps> = ({
  item: { createdAt, goals, month, _id },
}) => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${goalsStyle.goalsItemWrapper} relative`}>
      <span
        className={`block absolute ${
          user?.role !== 'admin'
            ? 'right-[90px] top-[18px]'
            : 'right-[135px] top-[21px]'
        }  cursor-pointer`}
        onClick={handleOpen}
      >
        <img className='w-[25px]' src={openFolder} alt='open' />
      </span>
      <GoalsAndArchiveItemTitle
        _id={_id as string}
        month={month}
        createdAt={createdAt}
      />
      <div
        className={`${
          isOpen
            ? 'visible h-auto opacity-100 transition-all duration-300'
            : 'invisible h-0 opacity-0 '
        }`}
      >
        {goals.length
          ? goals.map((item: IGoals) => (
              <ArchiveGoalItem item={item} key={item.id} />
            ))
          : null}
      </div>
    </div>
  );
};

export default memo(ArchiveItem);
