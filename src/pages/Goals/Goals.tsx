import { FC } from 'react';
import { useGetGoalsQuery } from '@/store/api/goalsApi';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import GoalsItem from '@/components/PagesComponents/Goals/GoalsItem';
import NewsSkeleton from '@/components/Skeletons/NewsSkeleton';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
//
import { IGoalsTypes } from '@/types/goalsTypes';
import { CustomError } from '@/types/errors';
import { goalsStyle } from '@/styles/goalsStyles';

const Goals: FC = () => {
  const { data = [], isLoading, isError, error } = useGetGoalsQuery();

  return (
    <ContentWrapper>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <div className={goalsStyle.wrapper}>
        <h3 className={goalsStyle.title}>Цілі компанії</h3>
        <div className={goalsStyle.proccessWrapper}>
          <div className='flex items-center gap-[5px]'>
            <span className={goalsStyle.spanStatus}>Виконані</span>
            <span className='w-[50px] h-[15px] bg-green-600 block' />
          </div>
          <div className='flex items-center gap-[5px]'>
            <span className=''>В процесі</span>
            <span className='w-[50px] h-[15px] bg-goalBlue block' />
          </div>
        </div>
      </div>
      {isLoading || isError ? (
        <>
          <NewsSkeleton />
          <NewsSkeleton />
          <NewsSkeleton />
        </>
      ) : null}
      {data.length
        ? data.map((item: IGoalsTypes) => (
            <GoalsItem key={item._id} item={item} />
          ))
        : null}
    </ContentWrapper>
  );
};

export default Goals;
