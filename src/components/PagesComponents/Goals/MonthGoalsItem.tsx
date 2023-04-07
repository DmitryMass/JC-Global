import { FC, memo, useState } from 'react';
import { deleteLogo, done, edit, goalMenu, proccess } from '@/data/svgStore';
import { IGoals } from '@/types/goalsTypes';
import { goalsStyle } from '@/styles/goalsStyles';

interface IMonthGoalsItemProps {
  item: IGoals;
}

const MonthGoalsItem: FC<IMonthGoalsItemProps> = ({
  item: { complete, goal, id },
}) => {
  const [menu, setMenu] = useState<boolean>(false);
  const admin = true;

  return (
    <div
      className={`${complete ? 'bg-green-600' : 'bg-goalBlue'} ${
        goalsStyle.goalWrapper
      }`}
    >
      <div>
        <p className={goalsStyle.goalText}>{goal}</p>
      </div>
      <div>
        {admin ? (
          <button
            onClick={() => setMenu((prev) => !prev)}
            className='block w-[50px] mt-[-10px]'
          >
            <img className='max-w-full' src={goalMenu} alt='goalMenu' />
          </button>
        ) : (
          <div className='w-[35px]'>
            {complete ? (
              <img className='max-w-full' src={done} alt='status' />
            ) : (
              <img className='max-w-full' src={proccess} alt='status' />
            )}
          </div>
        )}
        {admin ? (
          <div
            className={`${goalsStyle.adminPanelWrapper} ${
              menu
                ? `${goalsStyle.adminPanelVisible}`
                : `${goalsStyle.adminPanelInvisible}`
            }  `}
          >
            <button className='w-[25px] '>
              {complete ? (
                <img className='max-w-full' src={done} alt='status' />
              ) : (
                <img className='max-w-full' src={proccess} alt='status' />
              )}
            </button>
            <button className='w-[25px]'>
              <img src={edit} alt='edit' />
            </button>
            <button className='w-[25px]'>
              <img src={deleteLogo} alt='delete' />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default memo(MonthGoalsItem);
