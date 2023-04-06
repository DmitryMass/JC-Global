import { FC } from 'react';
import { useGetNewsQuery } from '@/store/api/newsApi';
//
import NewsItem from './NewsItem/NewsItem';
//
import { INews } from '@/types/newsTypes';
import NewsSkeleton from '@/components/Skeletons/NewsSkeleton';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import { CustomError } from '@/types/errors';
import Loader from '@/components/Loader/Loader';

const News: FC = () => {
  const { data = [], isLoading, isError, error } = useGetNewsQuery();
  return (
    <>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      {isLoading ? (
        <>
          <NewsSkeleton />
          <NewsSkeleton />
          <NewsSkeleton />
        </>
      ) : null}
      {data.length ? (
        data.map((item: INews) => <NewsItem item={item} key={item._id} />)
      ) : (
        <Loader />
      )}
    </>
  );
};

export default News;
