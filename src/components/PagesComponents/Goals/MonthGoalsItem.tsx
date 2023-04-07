import { FC, memo, useState } from 'react';
import { deleteLogo, done, edit, goalMenu, proccess } from '@/data/svgStore';
import { IGoals } from '@/types/goalsTypes';
import { goalsStyle } from '@/styles/goalsStyles';
import {
  useDeleteGoalMutation,
  useEditGoalMutation,
} from '@/store/api/goalsApi';

interface IMonthGoalsItemProps {
  item: IGoals;
  mainId: string;
}

const MonthGoalsItem: FC<IMonthGoalsItemProps> = ({
  item: { complete, goal, id },
  mainId,
}) => {
  const admin = true;
  const [menu, setMenu] = useState<boolean>(false);
  const [deleteGoal, { isLoading, isError, error }] = useDeleteGoalMutation();
  const [editGoal] = useEditGoalMutation();

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
            <button
              onClick={() =>
                editGoal({
                  id: mainId,
                  goalId: id as string,
                  status: !complete,
                })
              }
              className='w-[25px] '
            >
              {complete ? (
                <img className='max-w-full' src={done} alt='status' />
              ) : (
                <img className='max-w-full' src={proccess} alt='status' />
              )}
            </button>
            <button className='w-[25px]'>
              <img src={edit} alt='edit' />
            </button>
            <button
              onClick={() => deleteGoal({ id: mainId, goalId: id as string })}
              className='w-[25px]'
            >
              <img src={deleteLogo} alt='delete' />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default memo(MonthGoalsItem);
