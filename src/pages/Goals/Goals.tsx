import { FC } from 'react';
import { useGetGoalsQuery } from '@/store/api/goalsApi';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import GoalsItem from '@/components/PagesComponents/Goals/GoalsItem';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import GoalsAndArchiveTitle from '@/components/PagesComponents/GoalsAndArchiveTitle';
import EmptyData from '@/components/PagesComponents/EmptyData';
import DoubleSkelet from '@/components/Skeletons/DoubleSkelet';
//
import { IGoalsTypes } from '@/types/goalsTypes';
import { CustomError } from '@/types/errors';

const Goals: FC = () => {
  const {
    data = null,
    isLoading,
    isError,
    error,
    isFetching,
  } = useGetGoalsQuery();

  return (
    <ContentWrapper>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <GoalsAndArchiveTitle title='Цілі компанії' />
      {data?.length
        ? data.map((item: IGoalsTypes) => (
            <GoalsItem key={item._id} item={item} />
          ))
        : null}
      {!data?.length && !isFetching ? (
        <EmptyData title='Цілі наразі порожні.' />
      ) : null}
      {isLoading ? <DoubleSkelet /> : null}
    </ContentWrapper>
  );
};

export default Goals;
