import { goalsStyle } from '@/styles/goalsStyles';
import { FC } from 'react';

interface IGoalsAndArchiveTitleProps {
  title: string;
}

const GoalsAndArchiveTitle: FC<IGoalsAndArchiveTitleProps> = ({ title }) => {
  return (
    <div className={goalsStyle.wrapper}>
      <h3 className={goalsStyle.title}>{title}</h3>
      <div className={goalsStyle.proccessWrapper}>
        <div className='flex items-center gap-[5px]'>
          <span className={goalsStyle.spanStatus}>Виконані</span>
          <span className='w-[50px] h-[15px] bg-green-600 block' />
        </div>
        <div className='flex items-center gap-[5px]'>
          <span className={goalsStyle.spanStatus}>В процесі</span>
          <span className='w-[50px] h-[15px] bg-goalBlue block' />
        </div>
      </div>
    </div>
  );
};

export default GoalsAndArchiveTitle;
