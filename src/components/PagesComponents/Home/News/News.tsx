import { FC } from 'react';
import { useGetNewsQuery } from '@/store/api/newsApi';
//
import NewsItem from './NewsItem/NewsItem';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import DoubleSkelet from '@/components/Skeletons/DoubleSkelet';
import EmptyData from '../../EmptyData';
//
import { INews } from '@/types/newsTypes';
import { CustomError } from '@/types/errors';

const News: FC = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
    isFetching,
  } = useGetNewsQuery();
  return (
    <>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      {isLoading ? <DoubleSkelet /> : null}
      {data.length
        ? data.map((item: INews) => <NewsItem item={item} key={item._id} />)
        : null}
      {!data?.length && !isFetching ? (
        <EmptyData title='Новини наразі порожні.' />
      ) : null}
    </>
  );
};

export default News;
