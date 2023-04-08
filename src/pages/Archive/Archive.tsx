import { FC } from 'react';
import { useGetArchiveCompanyGoalsQuery } from '@/store/api/goalsApi';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import GoalsAndArchiveTitle from '@/components/PagesComponents/GoalsAndArchiveTitle';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import ArchiveItem from '@/components/PagesComponents/Archive/ArchiveItem';
import EmptyData from '@/components/PagesComponents/EmptyData';
import DoubleSkelet from '@/components/Skeletons/DoubleSkelet';
//
import { CustomError } from '@/types/errors';
import { IGoalsTypes } from '@/types/goalsTypes';

const Archive: FC = () => {
  const {
    data = null,
    isLoading,
    isError,
    error,
    isFetching,
  } = useGetArchiveCompanyGoalsQuery();

  return (
    <ContentWrapper>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <GoalsAndArchiveTitle title='Архівні цілі компанії' />
      {data?.length
        ? data.map((item: IGoalsTypes) => (
            <ArchiveItem item={item} key={item._id} />
          ))
        : null}
      {!data?.length && !isFetching ? (
        <EmptyData title='Цілі наразі порожні.' />
      ) : null}
      {isLoading ? <DoubleSkelet /> : null}
    </ContentWrapper>
  );
};

export default Archive;
